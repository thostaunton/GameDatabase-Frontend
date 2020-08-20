import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ VideogameService } from './videogame.service';
import { ChartsModule } from "ng2-charts";
import{ IVideogame } from './videogame';
import { Chart } from 'chart.js';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Videogames'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [1], label: '1'}
  ];

  public data = [];

  constructor(private _videogameService : VideogameService){}

  ngOnInit() {

    this._videogameService.getVideogames().subscribe(res => {
      for (var _i = 0; _i < 20; _i++) {
        this.barChartData[_i] = {data: [res[_i].reviewScore], label: res[_i].title};
      }
    });
  }
}
