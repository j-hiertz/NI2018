import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';
import { MeteoService } from '../services/meteo-services.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private chart: any;
  private datas: any;
  @ViewChild('canvas') private chartRef: ElementRef;

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit() {
      let my_position: any;
      this.datas = [];
      this.meteoService.getPositionData().then((result) => {
        my_position = result;
        this.meteoService.getMeteoData(my_position).subscribe((data: any) => {
            data['list'].forEach((d) => {
              console.log(d['dt_txt']);
              this.datas.push({
                y: d['main']['temp'],
                x: new Date(d['dt_txt'])
              });
            });
            console.log(this.datas);
            this.drawGraph();
        });
      });
  }

  drawGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
          datasets: [{
              label: 'firstLabel',
              data: this.datas
          }]
      },
      options: {
          responsive: false,
          scales: {
            xAxes: [{
              display: true,
              type: 'time',
                time: {
                    unit: 'hour'
                }
            }],
            yAxes: [{
                display: true
            }]
          }}
    });
  }
}
