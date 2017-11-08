import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {}

  getWeather(city: string) {

  }
}
