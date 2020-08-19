import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ IVideogame } from './videogame';

@Injectable({
  providedIn: 'root',
})

export class VideogameService {
  constructor(private http: HttpClient){}
  private _url : string = 'http://localhost:8080/getAllGames';

  getVideogames(): Observable<IVideogame[]>{
    return this.http.get<IVideogame[]>('/assets/data/videogames.json');
  }
}
