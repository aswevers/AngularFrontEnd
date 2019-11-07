import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GebruikerLogin } from './models/gebruiker-login.model';
import { Observable } from 'rxjs';
import { Gebruiker } from './models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) { }
register(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
  return this._httpClient.post<Gebruiker>("https://localhost:44369/api/Gebruiker", gebruikerLogin);
}
}
