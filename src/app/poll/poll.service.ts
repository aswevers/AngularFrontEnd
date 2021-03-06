import { Injectable } from '@angular/core';
import { Newpoll } from './models/newpoll.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from './models/poll.model';
import { Keuze } from './models/keuze.model';
import { Stem } from './models/stem.model';
import { Gebruiker } from '../security/models/gebruiker.model';
import { Pollgebruiker } from './models/pollgebruiker.model';
import { KeuzeApi } from './models/keuze-api.model';


@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private _httpClient: HttpClient) { }
  addPoll(poll: Newpoll): Observable<Poll> {
    return this._httpClient.post<Poll>("https://localhost:44369/api/Poll", poll);
  }
  addKeuze(keuze: Keuze): Observable<Keuze> {
    return this._httpClient.post<Keuze>("https://localhost:44369/api/Keuze", keuze);
  }
  getKeuzes() {
    return this._httpClient.get<Keuze>("https://localhost:44369/api/Keuze");
  }
  getKeuzesByPollId(id: number) {
    return this._httpClient.get<Keuze>("https://localhost:44369/api/Keuze/getKeuzesByPollId/" + id);
  }
  getPolls() {
    return this._httpClient.get<Poll>("https://localhost:44369/api/Poll");
  }

  getPoll(id:number){
    return this._httpClient.get<Poll>("https://localhost:44369/api/Poll/" + id);
  }

  getPollsWhereGebruiker(gebruikerId: number) {
    return this._httpClient.get<Pollgebruiker>("https://localhost:44369/api/PollGebruiker/getPGWhereGebruiker/" + gebruikerId);
  }

  getStemmen() {
    return this._httpClient.get<Stem>("https://localhost:44369/api/Stem");
  }

  getStemmenByPollId(id: number) {
    return this._httpClient.get<Stem>("https://localhost:44369/api/Stem/getStemmenByPollId/" + id);
  }

  addStem(stem: Stem) {
    return this._httpClient.post<Stem>("https://localhost:44369/api/Stem", stem);
  }

  addPollGebruiker(pollGebruiker: Pollgebruiker) {
    return this._httpClient.post<Pollgebruiker>("https://localhost:44369/api/PollGebruiker", pollGebruiker);
  }

  deleteStem(id: number) {
    return this._httpClient.delete<Stem>("https://localhost:44369/api/Stem/" + id);
  }
  deleteKeuze(id: number) {
    return this._httpClient.delete<Keuze>("https://localhost:44369/api/Keuze/" + id);
  }
  deletePoll(id: number) {
    return this._httpClient.delete<Poll>("https://localhost:44369/api/Poll/" + id);
  }
  putPollGebruiker(id: number, poll:Pollgebruiker) {
    return this._httpClient.put<Pollgebruiker>("https://localhost:44369/api/PollGebruiker/" + id, poll);
  }

  deletePollGebruiker(id:number){
    return this._httpClient.delete<Pollgebruiker>("https://localhost:44369/api/PollGebruiker/" + id);
  }
  



}
