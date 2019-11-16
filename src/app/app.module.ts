import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SseService } from 'src/app/services/sse/sse.service';
import { WeatherItemsComponent } from './components/weather-items/weather-items.component';

import { WeatherTemperatureComponent } from './components/weather-temperature/weather-temperature.component';
import { WeatherAirQualityIndexComponent } from './components/weather-air-quality-index/weather-air-quality-index.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpeedoChartComponent } from './shared/speedo-chart/speedo-chart.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ThermometerComponent } from './shared/thermometer/thermometer.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemsComponent,
    WeatherTemperatureComponent,
    WeatherAirQualityIndexComponent,
    NotFoundComponent,
    SpeedoChartComponent,
    ThermometerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FusionChartsModule],
  providers: [SseService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
