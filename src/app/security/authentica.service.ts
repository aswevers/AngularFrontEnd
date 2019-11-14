import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GebruikerLogin } from './models/gebruiker-login.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Gebruiker } from './models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticaService {
  isLoggedin = new BehaviorSubject(false);
  constructor(private _httpClient: HttpClient) { }
authenticate(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
return this._httpClient.post<Gebruiker>("https://localhost:44369/api/Gebruiker/authenticate", gebruikerLogin);
}
isLoggedIn() {
  if(localStorage.getItem("token")) {
  return true;
  } else {
  return false;
  }
  }

getGebruiker(id:number){
  return this._httpClient.get<Gebruiker>("https://localhost:44369/api/Gebruiker/" + id);
}

changePassword(id:number, gebruiker:Gebruiker){
  return this._httpClient.put<Gebruiker>("https://localhost:44369/api/Gebruiker/" + id, gebruiker);
}
  
}
