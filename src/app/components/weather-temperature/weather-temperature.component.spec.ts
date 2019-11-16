import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTemperatureComponent } from './weather-temperature.component';

describe('WeatherTemperatureComponent', () => {
  let component: WeatherTemperatureComponent;
  let fixture: ComponentFixture<WeatherTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
