export interface WeatherData {
  id: number;
  cityName: string;
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
