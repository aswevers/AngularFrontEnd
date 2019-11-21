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

  newEmptyGebruiker(email:string){
    return this._httpClient.get<Gebruiker>("https://localhost:44369/api/Gebruiker/newEmptyGebruiker/"+ email);
  }

  putGebruiker(id:number, gebruiker:Gebruiker){
    return this._httpClient.put<Gebruiker>("https://localhost:44369/api/Gebruiker/"+ id, gebruiker);
  }

  sendRequest(email:string, userId:number){
    var gebruiker1;
    var gebruiker2;
    var vriend;
    //Checken of email bestaat, zo niet nieuwe gebruiker aanmaken met temporary wachtwoord en mail versturen naar meegegeven email.
    this.getByEmail(email).subscribe(element=>{
      gebruiker1 = element;
      console.log(gebruiker1)
      this.sendMailTest(email).subscribe();
    });
    
    //Huidige gebruiker ophalen
    this.getGebruiker(userId).subscribe(element=>{
      gebruiker2 = element;
      //vriend maken
      vriend = new Vriend(gebruiker1.gebruikerId, gebruiker2.gebruikerId, gebruiker1, gebruiker2, false);
      this.postVriend(vriend).subscribe();
    });

  }

  sendMailTest(email:string){
    return this._httpClient.get<Vriend>("https://localhost:44369/api/Vriend/sendMail/" + email);
  }
}


