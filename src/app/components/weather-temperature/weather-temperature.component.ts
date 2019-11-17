import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.css']
})
export class WeatherTemperatureComponent implements OnInit {
  @Input() temperatureData;
  constructor() {}

  ngOnInit() {}
}
