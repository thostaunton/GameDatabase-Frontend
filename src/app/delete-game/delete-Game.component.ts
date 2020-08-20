import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'delete-game',
  templateUrl: './delete-game.component.html'
})
export class DeleteGameComponent implements OnInit{

  constructor(private http: HttpClient){}

    onSubmit(value: any){
      console.log(value);
      this.ngOnInit();

      const game:JSON = <JSON><unknown>{
        "title": value.title,
        "genre": 'Test',
        "publisher": 'Test',
        "release": 100,
        "reviewScore": 100
      }

      this.http.post('http://localhost:8080/delete', game, {responseType: 'text'})
      .subscribe((result) =>{
        console.log("result", result);
      })
    }

    ngOnInit(){

    }
  }
