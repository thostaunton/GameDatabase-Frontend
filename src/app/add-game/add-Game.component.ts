import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html',
})
export class AddGameComponent {

  constructor(private http: HttpClient){}
    onSubmit(data){
      console.warn(data);
      this.http.post('http://localhost:8080/createGame', data).subscribe((result) =>{
        console.warn("result", result);
      })
    }
  }
