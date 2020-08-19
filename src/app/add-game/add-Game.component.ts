import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html'
})
export class AddGameComponent implements OnInit{

  constructor(private http: HttpClient){}

    onSubmit(data){
      console.log(this.title);
      this.ngOnInit();


      const game:JSON = <JSON><unknown>{
        "title": this.title,
        "genre": this.genre,
        "publisher": this.publisher,
        "release": this.release,
        "reviewScore": this.reviewScore
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
