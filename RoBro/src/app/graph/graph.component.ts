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
      this.meteoService.getPositionData().then((result) => {
        my_position = result;
        this.meteoService.getMeteoData(my_position).subscribe((data: any) => {
            this.datas = {
                temperature: data['main']['temp'],
                name: data['name']
            };
        });
      });
    this.drawGraph();
  }

  drawGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
          datasets: [{
              label: 'firstLabel',
              data: [34, 32, 37, 28, 25],
          }],
          labels: ['01/12/2018', '02/12/2018', '03/12/2018', '04/12/2018', '05/12/2018']
      },
      options: {
          responsive: false,
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
                display: true
            }]
          }}
    });
  }
}
