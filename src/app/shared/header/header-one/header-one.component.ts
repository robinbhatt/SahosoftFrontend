import { Component, OnInit } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  constructor(private fix: LandingFixService) { }

  ngOnInit(): void {
    $.getScript('assets/js/menu.js');
  }

  openNav() {
    this.fix.addNavFix();
  }
  closeNav() {
    this.fix.removeNavFix();
  }


}
