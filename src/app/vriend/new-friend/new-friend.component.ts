import { Component, OnInit } from '@angular/core';
import { VriendService } from '../vriend.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']
})
export class NewFriendComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private vriendService:VriendService) {}
  friendForm = this.fb.group({
    email: ['', Validators.required]
  })
  verzonden:boolean=false;
  
  onSubmit() {
    this.vriendService.sendRequest(this.friendForm.get("email").value, parseInt(localStorage.getItem('id')));
    this.verzonden = true;
  }
  ngOnInit() {
  }

}
