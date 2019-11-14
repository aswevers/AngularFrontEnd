import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Vriend } from 'src/app/vriend/models/vriend.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pendingRequests:number = 0;
  friendRequests:{
    gebruiker1Id:number;
    gebruiker2Id:number;
    gebruiker1:Gebruiker;
    gebruiker2:Gebruiker;
    geaccepteerd:boolean;
  }[];

  cards:{
    title:string;
    description:string;
    link:string;
  }[];

  constructor(private dashboardService:DashboardService) {
    this.friendRequests=[];
    this.cards = [];
   }


   fillNavItem(){
     this.cards.push({title:"Vrienden", description:"Voeg nieuwe vrienden toe", link:"friends"}, 
     {title:"Nieuwe poll", description:"Maak een nieuwe poll aan", link:"newpoll"},
     {title:"Mijn polls", description:"Polls die jij hebt aangemaakt of aan bent toegevoegd", link:"mypolls"},
     {title:"Wachtwoord veranderen", description:"Verander je wachtwoord", link:"changepassword"},
     {title:"Log uit", description:"Log je uit", link:""});
     console.log(this.cards)
   }

  ngOnInit() {
    this.getPendingFriendRequests();
    this.fillNavItem();
  }

  getPendingFriendRequests(){
    var count = 0;
    this.dashboardService.getPendingFriendRequests(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while(element[count]){
        this.friendRequests.push(element[count]);
        count++;
      };
      console.log("count=" + count);
     //this.pendingRequests = count;
    });
    console.log(count);
    console.log(this.friendRequests);
    console.log("PR=" + this.pendingRequests);
  }
  //When sending a FR => set logged in user as gebruiker1 so that when showing pending requests gebruiker2 is always the receiver of the request
}
