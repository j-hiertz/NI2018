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
  private title: String = 'Meteo pour votre localisation';
  @ViewChild('canvas') private chartRef: ElementRef;

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit() {
      let my_position: any;
      this.datas = [];
      this.xLabels = [];
      this.meteoService.getPositionData().then((result) => {
        my_position = result;
        this.meteoService.getMeteoData(my_position).subscribe((data: any) => {
            data['list'].forEach((d) => {
              this.datas.push({
                y: d['main']['temp'],
                x: new Date(d['dt_txt'])
              });
            });
            this.title = `Meteo pour ${data['city']['name']}`;
            this.drawGraph();
        });
      });
  }

  drawGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Température',
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
                    unit: 'hour',
                    displayFormats: {
                      'hour' : 'D/MM - H:mm'
                    }
                }
            }],
            yAxes: [{
                display: true
            }]
          }}
    });
  }
}
