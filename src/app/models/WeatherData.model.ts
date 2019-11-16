export interface WeatherData {
  temperature?: Temperature;
  airQuality?: AirQuality;
}

export interface Temperature {
  unit?: string;
  value: number;
}

export interface AirQuality {
  aqi: number;
}
