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
}
