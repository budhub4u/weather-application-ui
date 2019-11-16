import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-speedo-chart',
  templateUrl: './speedo-chart.component.html',
  styleUrls: ['./speedo-chart.component.css']
})
export class SpeedoChartComponent implements OnChanges {
  @Input() dialValue;

  //chart config
  dataSource = {
    chart: {
      lowerLimit: '0',
      upperLimit: '300',
      showValue: '1',
      numberSuffix: '',
      theme: 'fusion',
      showToolTip: '0'
    },

    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '120',
          code: '#62B58F'
        },
        {
          minValue: '120',
          maxValue: '200',
          code: '#FFC533'
        },
        {
          minValue: '200',
          maxValue: '300',
          code: '#F2726F'
        }
      ]
    },
    dials: {
      dial: [
        {
          value: this.dialValue
        }
      ]
    }
  }; // end of this.dataSource;
  constructor() {}

  ngOnChanges(changes) {
    //Need to update the chart value whenever the input value gets updated.
    if (changes.dialValue) {
      this.dataSource.dials.dial[0].value = this.dialValue;
    }
  }
}
