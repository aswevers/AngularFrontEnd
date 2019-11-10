import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vriend } from '../vriend/models/vriend.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient:HttpClient) { }

  
  getPendingFriendRequests(id:number){
    return this._httpClient.get<Vriend>("https://localhost:44369/api/Vriend/getPendingFriendRequests/" + id);
  }

}
