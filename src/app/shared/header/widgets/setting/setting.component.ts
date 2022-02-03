import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(lang:any) {
    this.translate.use(lang);
  }
}
