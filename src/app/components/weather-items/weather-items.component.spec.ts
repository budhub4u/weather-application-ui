import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherItemsComponent } from './weather-items.component';

describe('WeatherItemsComponent', () => {
  let component: WeatherItemsComponent;
  let fixture: ComponentFixture<WeatherItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherItemsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
