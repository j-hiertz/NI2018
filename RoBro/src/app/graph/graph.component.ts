import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private data: any;
  private chart: any;
  @ViewChild('canvas') private chartRef: ElementRef;

  constructor() {
    this.data = [
      {'x': 0, 'y': 34},
      {'x': 1, 'y': 32},
      {'x': 2, 'y': 37},
      {'x': 3, 'y': 28},
      {'x': 4, 'y': 25}
    ];
  }

  ngOnInit() {
    this.drawGraph();
  }

  drawGraph() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: [{'x': 0, 'y': 34}, {'x': 1, 'y': 32}, {'x': 2, 'y': 37}, {'x': 3, 'y': 28}, {'x': 4, 'y': 25}],
      options: {
          responsive: false,
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    max: 34,
                    stepSize: 1
                }
            }]
          }}
    });
    console.log(this.chart);
  }

}
