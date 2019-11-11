import { Component, OnInit } from '@angular/core';
import { VriendService } from '../vriend.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Vriend } from '../models/vriend.model';

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.component.html',
  styleUrls: ['./friend-page.component.css']
})
export class FriendPageComponent implements OnInit {

  constructor(private vriendService:VriendService) {
    this.friendRequests=[]
   }
  friendRequests:{}[];
  ngOnInit() {
    this.getPendingRequests();
  }

  getPendingRequests(){
    this.vriendService.getPendingFriendRequests(parseInt(localStorage.getItem("id"))).subscribe(element=>{
      element.forEach(item =>{
        this.friendRequests.push(item);
      })
    })
  }

}
