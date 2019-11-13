import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vriend } from './models/vriend.model';
import { Observable } from 'rxjs';
import { Gebruiker } from '../security/models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class VriendService {

  constructor(private _httpClient: HttpClient) { }

  getByEmail(email:string){
    return this._httpClient.get<Gebruiker>("https://localhost:44369/api/Gebruiker/getByEmail/"+ email);
  }

  getVrienden(): Observable<Vriend> {
    return this._httpClient.get<Vriend>("https://localhost:44369/api/Vriend");
  }

  getVriendenById(id:number){
    return this._httpClient.get<Vriend>("https://localhost:44369/api/Vriend/getVriendenWhereGebruikerId/" + id);
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

  postVriend(vriend:Vriend){
    return this._httpClient.post<Vriend>("https://localhost:44369/api/Vriend/", vriend);
  }

  getGebruiker(id:number){
    return this._httpClient.get<Gebruiker>("https://localhost:44369/api/Gebruiker/" + id);
  }

  newEmptyGebruiker(){
    return this._httpClient.get<Gebruiker>("https://localhost:44369/api/Gebruiker/newEmptyGebruiker/");
  }

  putGebruiker(id:number, gebruiker:Gebruiker){
    return this._httpClient.put<Gebruiker>("https://localhost:44369/api/Gebruiker/"+ id, gebruiker);
  }

  sendRequest(email:string, userId:number){
    var gebruiker1;
    var gebruiker2;
    var vriend;
    //Checken of email bestaat, zo niet nieuwe gebruiker aanmaken met temporary wachtwoord.
    this.getByEmail(email).subscribe(element=>{
      gebruiker1 = element;
    }, err =>{
      this.newEmptyGebruiker().subscribe(element =>{
        gebruiker1 = element;
        gebruiker1.email = email;
        this.putGebruiker(gebruiker1.gebruikerId, gebruiker1).subscribe();
      });
    });
    
    this.getGebruiker(userId).subscribe(element=>{
      console.log(element)
      gebruiker2 = element;
      vriend = new Vriend(gebruiker1.gebruikerId, gebruiker2.gebruikerId, gebruiker1, gebruiker2, false);
      console.log(vriend);
      this.postVriend(vriend).subscribe(element =>{
        console.log(element)
      });
    });
  }
}


