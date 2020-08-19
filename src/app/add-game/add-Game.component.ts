import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html'
})
export class AddGameComponent implements OnInit{

  constructor(private http: HttpClient){}

    onSubmit(value: any){
      console.log(value);
      this.ngOnInit();


      const game:JSON = <JSON><unknown>{
        "title": value.title,
        "genre": value.genre,
        "publisher": value.publisher,
        "release": value.release,
        "reviewScore": value.reviewScore
      }

      console.log(game);


      this.http.post('http://localhost:8080/createGame', game, {responseType: 'text'})
      .subscribe((result) =>{
        console.log("result", result);
      })
    }

    ngOnInit(){

    }
  }
