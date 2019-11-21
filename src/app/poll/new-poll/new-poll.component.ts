import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { PollService } from '../poll.service';
import { Newpoll } from '../models/newpoll.model';
import { Keuze } from '../models/keuze.model';
import { Poll } from '../models/poll.model';
import { Router } from '@angular/router';
import { VriendService } from 'src/app/vriend/vriend.service';
import { AuthenticaService } from 'src/app/security/authentica.service';
import { Pollgebruiker } from '../models/pollgebruiker.model';

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
    
    //teller van het aantal antwoorden. Default op 2 omdat een poll minstens 2 keuzes moet hebben
    teller: number = 2;

    //teller om door vrienden te lopen
    tempcount:number = 0;

    //boolean om mee te geven dat de limiet van het max aantal antwoorden bereikt is
    limit:boolean = true;

    //Eerste 5 antwoorden waarvan het invoerveld links moet komen te staan
    arrayItems:{
      naam:string;
    }[];

    //Extra antwoorden waarvan het invoerveld rechts moet komen te staan
    arrayItemsEx:{
      naam:string;
    }[];

    //Alle vriendobjecten waar de ingelogde gebruiker deel van uitmaakt
    arrayVrienden:{
      gebruikerId1: number,
      gebruikerId2: number,
    }[];

    //Alle vrienden die toegevoegd moeten worden aan de poll
    vriendent:number[];

    //Boolean die aantoont of het minimum aantal vrienden bereikt is
    vriendenMinimum:boolean = false;
    
    
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


   //Creëert een nieuw invoegveld voor een extra antwoord. Max. aantal antwoorden = 10.
   //ArrayItems zijn de eerste 5 invoervelden die links staan, arrayItemsEx zijn de laatste 5 die rechts staan
   //Limit is de boolean die de 'voeg antwoord toe' knop disabled bij 10
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
    //Nieuw pollobject aanmaken
    this.poll = new Newpoll(this.newPollForm.get('titel').value)
    //Poll toevoegen
    this.pollservice.addPoll(this.poll).subscribe(result=>{
      this.pollId = result.pollId;
      for(let i=1; i<=10; i++){
        //Overloop alle antwoordvelden en voeg de ingevulde velden toe als nieuwe keuze
        if(this.newPollForm.get('antwoord' + i).value != null && this.newPollForm.get('antwoord' + i).value != ''){
          this.antwoordex  = new Keuze(this.newPollForm.get('antwoord' + i).value, result.pollId,);
          this.pollservice.addKeuze(this.antwoordex).subscribe();
        }
      }  
      //Overloop alle vrienden (this.vriendent) die class 'checked' bevatten en voeg voor elke vriend een nieuw PollGebruiker object toe
      for(let i=0; i<this.vriendent.length;i++){
        var pg = new Pollgebruiker(result.pollId, this.vriendent[i], false, false);
        this.pollservice.addPollGebruiker(pg).subscribe();
      }
      //PollGebruiker object aanmaken voor de ingelogde gebruiker
      this.pollservice.addPollGebruiker(new Pollgebruiker(result.pollId, parseInt(localStorage.getItem("id")), true, true)).subscribe();
      this.router.navigate(['/mypolls']);
    });    
  }

  //Geeft vrienden die men wenst toe te wijzen aan de poll de class 'checked' en voegt deze toe aan de vriendent array
  addFriend(id:number){
    var btn = document.getElementById('gebruiker' + id);
    if(btn.classList.contains("checked")){
      btn.classList.remove("checked");
      this.vriendent.splice(this.vriendent.indexOf(id), 1);
    }else{
      btn.classList.add("checked");
      this.vriendent.push(id);
      console.log(this.vriendent)
    }
    if(this.vriendent.length >= 2){
      this.vriendenMinimum = true;
    }else{
      this.vriendenMinimum = false;
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

  //Kijkt of een vriend object de ingelogde gebruiker bevat 
  checkEmail(element){
    if(localStorage.getItem('user') == element[this.tempcount].gebruiker1.email || localStorage.getItem('user') == element[this.tempcount].gebruiker2.email){
      return true;
    }
  }

  //Haalt een value uit de localstorage
  readLocalStorage(key){
    return localStorage.getItem(key);
  }  

  //Kijkt of de meegegeven email die van de ingelogde gebruiker is
  checkLocalStorageUser(email){
    if(this.readLocalStorage("user") == email){
      return true
    }
  }

}