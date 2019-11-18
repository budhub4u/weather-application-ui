import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SseService } from 'src/app/services/sse/sse.service';
import { WeatherData } from 'src/app/models/WeatherData.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-items',
  templateUrl: './weather-items.component.html',
  styleUrls: ['./weather-items.component.css']
})
export class WeatherItemsComponent implements OnInit {
  weatherData: WeatherData;
  city: string;
  constructor(
    private _sseService: SseService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.city = params['city'] || 'hyderabad';
    });
  }

  ngOnInit() {
    this._sseService
      .getServerSentEvent(environment.weatherUrl + '/' + this.city)
      .subscribe(
        data => {
          let receivedData = JSON.parse(data.data);
          if (receivedData.cityName == this.city) {
            this.weatherData = JSON.parse(data.data);
          }
        },
        error => {
          console.log('error in connection', error);
        }
      );
  }
}
