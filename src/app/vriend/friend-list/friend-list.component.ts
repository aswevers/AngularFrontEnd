import { Component, OnInit } from '@angular/core';
import { VriendService } from '../vriend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private vriendService:VriendService) { 
    this.friends = [];
    this.loggedIn = localStorage.getItem('user');
  }

  ngOnInit() {
    this.getVrienden();
  }

  friends:{}[];
  loggedIn:string;
  getVrienden(){
    var count = 0;
    this.vriendService.getVriendenById(parseInt(localStorage.getItem("id"))).subscribe(element =>{
      while(element[count]){
        this.friends.push(element[count]);
        count++;
      }
      console.log(this.friends)
    })
  }

  deleteFriend(id:number){
    this.vriendService.deleteRequest(id).subscribe();
    window.location.reload();
  }

}
