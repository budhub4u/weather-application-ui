import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SpeedoChartComponent } from './speedo-chart.component';

describe('SpeedoChartComponent', () => {
  let component: SpeedoChartComponent;
  let fixture: ComponentFixture<SpeedoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedoChartComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
