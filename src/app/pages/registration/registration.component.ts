import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/global';
import { DataService } from 'src/app/shared/services/data.service';
import { MustMatchValidator } from 'src/app/shared/validators/validations.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private _dataService: DataService, private _fb: FormBuilder, private _toastr: ToastrService) {
 
  }
  createRegisterForm() {
    this.registerForm = this._fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatchValidator('password', 'confirmPassword')
    });
    this.registerForm.reset();
  }
  ngOnInit() {
    this.createRegisterForm();
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // this._dataService.post(Global.BASE_API_PATH + "CustomerMaster/Save/", formData.value).subscribe(
    //   data => {
    //     if (data.isSuccess) {
    //       this._toastr.info('Data saved successfully! ', 'CREATE ACCOUNT');
    //       this.registerForm.reset();
    //     } else {
    //       this._toastr.error(data.errors[0], 'CREATE ACCOUNT');
    //     }
    //   }
    // );
  }
}
