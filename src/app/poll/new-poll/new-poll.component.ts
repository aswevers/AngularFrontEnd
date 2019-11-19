import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { PollService } from '../poll.service';
import { Newpoll } from '../models/newpoll.model';
import { Keuze } from '../models/keuze.model';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Vriend } from 'src/app/vriend/models/vriend.model';
import { VriendService } from 'src/app/vriend/vriend.service';
import { AuthenticaService } from 'src/app/security/authentica.service';
import { Pollgebruiker } from '../models/pollgebruiker.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  newPollForm = this.fb.group({
    titel: ['', Validators.required],
    antwoord1: ['', Validators.required],
    antwoord2: ['', Validators.required],
    antwoord3: [''],
    antwoord4: [''],
    antwoord5: [''],
    antwoord6: [''],
    antwoord7: [''],
    antwoord8: [''],
    antwoord9: [''],
    antwoord10: [''],
    });
    
    teller: number = 2;
    tempcount:number = 0;
    limit:boolean = true;
    arrayItems:{
      naam:string;
    }[];
    arrayItemsEx:{
      naam:string;
    }[];
    arrayVrienden:{
      gebruikerId1: number,
      gebruikerId2: number,
    }[];
    vriendent:number[];
    
    
   poll: Newpoll;
   tpoll : Poll;
   antwoordex : Keuze;
   pollId: number;

  constructor(private pollservice: PollService, private authenticateService: AuthenticaService,private fb: FormBuilder, private router: Router, private vriendservice:VriendService) {
    this.newPollForm = this.fb.group({
      antwoordenArray : this.fb.array([]),
      antwoordenArrayEx: this.fb.array([]),
      vriendenArray: this.fb.array([])
    })
    this.vriendent = [];
   }

  voegAntwoordToe(){
    
    this.teller++;
    if (this.teller <= 10){
      if(this.teller > 5){
        this.arrayItemsEx.push(null); 
      }else{
        this.arrayItems.push(null);
      }
    }else{
      this.limit = false;
    }
  }

  onSubmit(){
    this.poll = new Newpoll(this.newPollForm.get('titel').value)
    
    this.pollservice.addPoll(this.poll).subscribe(result=>{
      this.pollId = result.pollId;
      for(let i=1; i<=10; i++){
        if(this.newPollForm.get('antwoord' + i).value != null && this.newPollForm.get('antwoord' + i).value != ''){
          this.antwoordex  = new Keuze(this.newPollForm.get('antwoord' + i).value, result.pollId,);
          this.pollservice.addKeuze(this.antwoordex).subscribe();
        }
      }  
      for(let i=0; i<this.vriendent.length;i++){
        var pg = new Pollgebruiker(result.pollId, this.vriendent[i], false);
        console.log("i= " + i)
        console.log(this.vriendent[i])
        console.log(pg)
        this.pollservice.addPollGebruiker(pg).subscribe();
      }
      this.pollservice.addPollGebruiker(new Pollgebruiker(result.pollId, parseInt(localStorage.getItem("id")), true)).subscribe();
    });

    
    this.router.navigateByUrl('/mypolls');

  }

  addFriend(id:number){
    var btn = document.getElementById('gebruiker' + id);
    console.log(btn)
    console.log(id)
    if(btn.classList.contains("checked")){
      btn.classList.remove("checked");
      this.vriendent.splice(this.vriendent.indexOf(id), 1);
    }else{
      btn.classList.add("checked");
      this.vriendent.push(id);
      console.log(this.vriendent)
    }
  }

  ngOnInit() {
    this.arrayItems=[];
    this.arrayItemsEx=[];
    this.arrayVrienden=[];
    this.vriendent=[];
    
    this.newPollForm = this.fb.group({
      titel: ['', Validators.required],
      antwoord1: ['', Validators.required],
      antwoord2: ['', Validators.required],
      antwoord3: [''],
      antwoord4: [''],
      antwoord5: [''],
      antwoord6: [''],
      antwoord7: [''],
      antwoord8: [''],
      antwoord9: [''],
      antwoord10: [''],
      antwoordenArray: this.fb.array([]),
      antwoordenArrayEx: this.fb.array([]),
      vriendenArray: this.fb.array([])
      });      
      this.vriendservice.getVrienden().forEach(element => {
        while(element[this.tempcount] != null ){
          if(this.checkEmail(element)&& element[this.tempcount].geaccepteerd){
            this.arrayVrienden.push(element[this.tempcount]);
          }
          this.tempcount++;
        }
      });
  }

  checkEmail(element){
    if(localStorage.getItem('user') == element[this.tempcount].gebruiker1.email || localStorage.getItem('user') == element[this.tempcount].gebruiker2.email){
      return true;
    }
  }

  readLocalStorage(key){
    return localStorage.getItem(key);
  }  

  checkLocalStorageUser(email){
    if(this.readLocalStorage("user") == email){
      return true
    }
  }

}