import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/global';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactusForm: FormGroup;
  submitted = false;
  constructor(
    private _dataService: DataService, 
    private _fb: FormBuilder, 
    private _toastr: ToastrService
    ) { }

  createContactUsForm() {
    this.contactusForm = this._fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      MobileNo: ['', Validators.required],
      Message: ['', Validators.required]
    });
    this.contactusForm.reset();
  }
  ngOnInit() {
    this.createContactUsForm();
  }
  // convenience getter for easy access to form fields
  get f() { return this.contactusForm.controls; }

  PostData(formData: any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactusForm.invalid) {
      return;
    }

    // this._dataService.post(Global.BASE_API_PATH + "ContactUs/Save/", formData.value).subscribe(
    //   data => {
    //     if (data.isSuccess) {
    //       this._toastr.info('Data saved successfully! ', 'Contact Us');
    //       this.contactusForm.reset();
    //     } else {
    //       this._toastr.error(data.errors[0], 'Contact Us');
    //     }
    //   }
    // );
  }

}
