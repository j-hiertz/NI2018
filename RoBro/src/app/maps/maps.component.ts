import { Component, OnInit } from '@angular/core';

declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([50.6311634, 3.0599573], 12);


    L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
      apikey: 'ca195239dacc45c193b6b693fe8513c9',
      maxZoom: 22
    }).addTo(map);
  }

}
