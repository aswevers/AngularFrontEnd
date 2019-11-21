import { Component, OnInit } from '@angular/core';
import { VriendService } from '../vriend.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']
})
export class NewFriendComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private vriendService:VriendService) {
    this.vrienden=[];
  }
  friendForm = this.fb.group({
    email: ['', Validators.required]
  })
  verzonden:boolean=false;
  vrienden:string[];
  alBevriend:boolean=false;
  getVrienden(){
    var count = 0;
    this.vriendService.getVriendenById(parseInt(localStorage.getItem("id"))).subscribe(element =>{
      while(element[count]){
        this.vrienden.push(element[count].gebruiker1.email)
        this.vrienden.push(element[count].gebruiker2.email)
        count++;
      }
    })
  }

  onSubmit() {
    var email = this.friendForm.get("email").value;
    if(this.vrienden.includes(email)){
      this.alBevriend = true;
      this.verzonden = false;
    }else{
      this.vriendService.sendRequest(email, parseInt(localStorage.getItem('id')));
      this.verzonden = true;
      this.alBevriend = false;
    }
    
  }
  ngOnInit() {
    this.getVrienden();
  }

}
