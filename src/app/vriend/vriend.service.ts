import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vriend } from './models/vriend.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VriendService {

  constructor(private _httpClient: HttpClient) { }

  getVrienden(): Observable<Vriend> {
    return this._httpClient.get<Vriend>("https://localhost:44369/api/Vriend");
  }
  
  getPendingFriendRequests(id:number): Observable<Vriend[]>{
    return this._httpClient.get<Vriend[]>("https://localhost:44369/api/Vriend/getPendingFriendRequests/" + id);
  }

  acceptRequest(id:number, vriend:Vriend){
    return this._httpClient.put<Vriend>("https://localhost:44369/api/Vriend/" + id, vriend);
  }

  deleteRequest(id:number){
    return this._httpClient.delete<Vriend>("https://localhost:44369/api/Vriend/" + id);
  }

  sendRequest(email:string, userId:number){
    return this._httpClient.post<Vriend>("https://localhost:44369/api/Vriend/sendRequest/" + email, userId);
  }
}
