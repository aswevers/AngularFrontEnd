import { Component, OnInit, Input } from '@angular/core';
import { Vriend } from '../models/vriend.model';
import { VriendService } from '../vriend.service';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {

  @Input() request: Vriend;
  constructor(private vriendService:VriendService) { }

  ngOnInit() {
  }

  //Accepteerd vriendschapsverzoek
  acceptRequest(){
    this.request.geaccepteerd = true;
    this.vriendService.acceptRequest(this.request.id, this.request).subscribe();
    window.location.reload();
  }

  //Verwijdert vriendobject
  deleteRequest(){
    console.log(this.request.id)
    this.vriendService.deleteRequest(this.request.id).subscribe();
    window.location.reload();
  }

}
