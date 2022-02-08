import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @Input() tagsFiltersInput: any = [];
  @Output() tagFiltersOutput: EventEmitter<any[]> = new EventEmitter<any[]>();

  checkedTagArray:any[] = [];

  constructor() { }

  ngOnInit(): void {
    $(".collapse-block-title").on('click', function (e) {
      e.preventDefault();

      let speed = 300;// milisecond
      let thisItem = $(this).parent();
      let nextLevel = $(this).next('.collection-collapse-block-content1');

      if (thisItem.hasClass('open')) {
        thisItem.removeClass('open');
        nextLevel.slideUp(speed);
      } else {
        thisItem.addClass('open');
        nextLevel.slideDown(speed);
      }
    });
  }

  checkedFilter(event: any) {
    let val = event.target.checked;
    if (val) {
      this.checkedTagArray.push(val);//to add
    } else {
      let index = this.checkedTagArray.indexOf(val);
      this.checkedTagArray.splice(index, 1); //to rfemove
    }

    this.tagFiltersOutput.emit(this.checkedTagArray);
  }

}
