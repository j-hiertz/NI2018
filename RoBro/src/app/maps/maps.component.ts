import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo-services.service';

declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit() {
    this.meteoService.getPositionData().then((result: any) => {
      console.log(result);
      const map = L.map('map').setView([result.latitude, result.longitude], 12);
      L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
        apikey: 'ca195239dacc45c193b6b693fe8513c9',
        maxZoom: 22
      }).addTo(map);
    });
  }
}
