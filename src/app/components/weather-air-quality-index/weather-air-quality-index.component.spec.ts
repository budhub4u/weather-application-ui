import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherAirQualityIndexComponent } from './weather-air-quality-index.component';

describe('WeatherAirQualityIndexComponent', () => {
  let component: WeatherAirQualityIndexComponent;
  let fixture: ComponentFixture<WeatherAirQualityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherAirQualityIndexComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAirQualityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
