import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private currentPos: any;
  private weatherData: any;
  private apiKey = '227130f473720185ee6c272ff86c89ad';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  public getPositionData() {
    const my_promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentPos = {};
        this.currentPos.latitude = position.coords.latitude;
        this.currentPos.longitude = position.coords.longitude;
        resolve(this.currentPos);
      }, (error) => {
        reject(error);
      });
    });

    return my_promise;
  }

  public getMeteoData(position): any {
      return this.http.get(`${this.apiUrl}forecast?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${this.apiKey} `);
  }

  public getInstantMeteoData(position): any {
    return this.http.get(`${this.apiUrl}weather?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${this.apiKey} `);
}
}
