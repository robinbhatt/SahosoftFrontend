import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Product } from 'src/app/shared/classes/product';


@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {


  @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
    //  $(".default").css("display", "block");// show .default class div
    $(".default").show();// show .default class div

    $(".tabs li a").on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().find("li").removeClass("current");// find all li of ul (parent of a tag and remove class)
      $(this).parent().addClass("current");// add class in current li on which you have clicked

      let current_href = $(this).attr("href"); // get href attr value of current a tag
      //$("#" + current_href).css("display", "block");
      $("#" + current_href).show();

      //hide div which is not match with current href attr value
      $(this).parent().parent().parent().find(".tab-content").not("#" + current_href).hide();
      //$(this).parent().parent().parent().find(".tab-content").not("#" + current_href).css("display","none");

    });

  }

}
