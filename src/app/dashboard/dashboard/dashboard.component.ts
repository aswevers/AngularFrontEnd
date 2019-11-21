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

   //Cards vullen met de informatie van alle mogelijke pagina's (naam, beschrijving en link naar het component)
   fillNavItem(){
     this.cards.push({title:"Vrienden", description:"Voeg nieuwe vrienden toe", link:"friends"}, 
     {title:"Nieuwe poll", description:"Maak een nieuwe poll aan", link:"newpoll"},
     {title:"Mijn polls", description:"Polls die jij hebt aangemaakt of aan bent toegevoegd", link:"mypolls"},
     {title:"Wachtwoord veranderen", description:"Verander je wachtwoord", link:"changepassword"},
     {title:"Log uit", description:"Log je uit", link:""});
   }

  ngOnInit() {
    this.fillNavItem();
  }
}
