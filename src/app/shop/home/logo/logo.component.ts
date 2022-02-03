import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/global';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {


  logo: any = [];

  constructor(private _dataService: DataService, private _toastr:ToastrService) { }

  ngOnInit(): void {
    this._dataService.get(Global.FireBase_BASE_API_PATH + "BrandLogoMaster/GetAll.json").subscribe(res => {
      this.logo = res;
      if (res) {
        let arr = [];
        for (const key of Object.keys(res)) { arr.push(res[key]); }
        this.logo = arr
        // console.log(this.logo);
      } else if (res == null) {
        this._toastr.info('No BrandLogo available', "BrandLogo Master");
        this.logo = []
      } else {
        this._toastr.error('Some shit happened', "BrandLogo Master");
        this.logo = []
      }
    });
  }


  // Logo Slick slider config
  logoSliderConfig = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


}
