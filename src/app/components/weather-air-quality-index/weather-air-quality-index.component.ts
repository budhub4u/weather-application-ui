import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-air-quality-index',
  templateUrl: './weather-air-quality-index.component.html',
  styleUrls: ['./weather-air-quality-index.component.css']
})
export class WeatherAirQualityIndexComponent implements OnInit {
  @Input() airQualityData;
  constructor() {}

  ngOnInit() {}
}
