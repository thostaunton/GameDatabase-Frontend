import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ IVideogame } from './videogame';

@Injectable({
  providedIn: 'root',
})

export class VideogameService {
  constructor(private http: HttpClient){}

  getVideogames(): Observable<IVideogame[]>{
    return this.http.get<IVideogame[]>('http://localhost:8080/getAllGames');
  }
}
