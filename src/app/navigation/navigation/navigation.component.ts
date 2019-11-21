import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { PollService } from 'src/app/poll/poll.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  pendingFriends:number = 0;
  pendingPolls:number = 0;
  
  constructor(private dashboardService:DashboardService, private pollService: PollService) {
   }

  ngOnInit() {
    this.getPendingFriendRequests();
    this.getPollRequests();

  }
  
  //Haalt vriendschapsverzoeken op (vriend-relaties waar met de ingelogde gebruiker als gebruiker1 en IsGeaccepteerd == false)
  //pendingFriends is het aantal vriendenschapsverzoeken
  getPendingFriendRequests(){
    var count = 0;
    this.dashboardService.getPendingFriendRequests(parseInt(localStorage.getItem("id"))).forEach(element =>{
      while(element[count]){
        count++;
      };
     this.pendingFriends = count;
    });
  }

  //Haalt pollrequests op (pollGebruikers waar heeftGeaccepteerd == false)
  //pendingPolls is het aantal pollverzoeken
  getPollRequests(){
    var count = 0;
    this.pollService.getPollsWhereGebruiker(parseInt(localStorage.getItem("id"))).subscribe(result =>{
      while(result[count]){
        if(!result[count].heeftGeaccepteerd){
          this.pendingPolls++;
        }
        count++;
      }
    })
  }

}
