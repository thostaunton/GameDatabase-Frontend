import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ VideogameService } from './videogame.service';
import{ IVideogame } from './videogame';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

data = [];

constructor(private _videogameService : VideogameService){}

  ngOnInit() {

    this._videogameService.getVideogames().subscribe(res => {
      this.data = res;
    });
  }
}
