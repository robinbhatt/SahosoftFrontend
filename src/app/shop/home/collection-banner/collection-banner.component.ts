import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/global';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerComponent implements OnInit {

  category: any = [];

  constructor(private _dataService: DataService, private _toastr:ToastrService) { }

  ngOnInit(): void {
    this._dataService.get(Global.FireBase_BASE_API_PATH + "CategoryMaster/GetAll.json").subscribe(res => {
      if (res) {
        let arr = [];
        for (const key of Object.keys(res)) { arr.push(res[key]); }
        this.category = arr
        // console.log(this.category);
      } else if (res == null) {
        this._toastr.info('No category available', "category Master");
        this.category = []
      } else {
        this._toastr.error('Some shit happened', "category Master");
        this.category = []
      }
    });
   }

}