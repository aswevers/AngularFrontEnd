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

  cards:{
    title:string;
    description:string;
    link:string;
  }[];

  constructor() {
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
    this.fillNavItem();
  }

  
  //When sending a FR => set logged in user as gebruiker1 so that when showing pending requests gebruiker2 is always the receiver of the request
}
