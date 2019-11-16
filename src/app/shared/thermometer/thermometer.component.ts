import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnChanges {
  @Input() temperature: number;

  // chart config
  dataSource = {
    chart: {
      lowerLimit: '0',
      upperLimit: '50',
      numberSuffix: '°C',
      thmFillColor: '#008ee4',
      thmOriginX: '100'
    },
    value: this.temperature
  }; // end of this.dataSource;

  constructor() {}

  ngOnChanges(changes) {
    // Need to update the chart value whenever the input value gets updated.
    if (changes.temperature) {
      this.dataSource.value = this.temperature;
    }
  }
}
