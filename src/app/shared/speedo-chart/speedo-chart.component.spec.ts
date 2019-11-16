import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedoChartComponent } from './speedo-chart.component';

describe('SpeedoChartComponent', () => {
  let component: SpeedoChartComponent;
  let fixture: ComponentFixture<SpeedoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedoChartComponent ]
    })
    .compileComponents();
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
