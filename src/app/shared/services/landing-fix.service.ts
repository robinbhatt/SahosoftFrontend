import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LandingFixService {

  // constructor() { }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  //Add or Remove Class
  addNavFix() {
    this.document.getElementById('mySidenav')?.classList.add('open-side');
  }

  removeNavFix() {
    this.document.getElementById('mySidenav')?.classList.remove('open-side');
  }

}
