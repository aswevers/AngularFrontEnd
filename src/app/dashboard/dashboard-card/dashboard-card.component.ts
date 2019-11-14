import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() itemtitel:string;
  @Input() itemdescription:string;
  @Input() itemlink:string;
  constructor() { }

  ngOnInit() {
  }
  
  logUit(){
    if(this.itemlink == ""){
      localStorage.removeItem("token");

    }
  }


}
