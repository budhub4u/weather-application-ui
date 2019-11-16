import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SseService } from 'src/app/services/sse/sse.service';
import { WeatherData } from 'src/app/models/WeatherData.model';

@Component({
  selector: 'app-weather-items',
  templateUrl: './weather-items.component.html',
  styleUrls: ['./weather-items.component.css']
})
export class WeatherItemsComponent implements OnInit {
  weatherData: WeatherData;

  constructor(private _sseService: SseService) {}

  ngOnInit() {
    this._sseService.getServerSentEvent(environment.weatherUrl).subscribe(
      data => {
        console.log(JSON.parse(data.data));
        this.weatherData = JSON.parse(data.data);
      },
      error => {
        console.log('error in connection', error);
      }
    );
  }
}
