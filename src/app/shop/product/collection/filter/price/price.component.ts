import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Output() priceFilters = new EventEmitter();

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 1,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  priceChanged(event: any) {
    let arr = [];
    arr.push(event.value); // min selected value
    arr.push(event.highValue); // max selected value

    this.priceFilters.emit(arr);
  }


}
