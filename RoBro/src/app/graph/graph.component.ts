import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

	private data: Object;
	constructor() {
		this.data = {
			'2018': 34,
			'2019': 23,
			'2020': 30,
			'2021': 14
		};
	}

	ngOnInit() {
	}

}
