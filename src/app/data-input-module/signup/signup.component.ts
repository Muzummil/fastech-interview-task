import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: NgbDateStruct;
  public signupForm: FormGroup;
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public countriesList = [];
  constructor(public configService: ConfigService, public fb: FormBuilder, private userService: UserService,
    private _router: Router, private storageService: StorageService) {
    this.initForm();
  }

  ngOnInit() {
    this.setCountries();
  }

  private initForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      gender: ['male', [Validators.required]],
      nationality: ['', [Validators.required]],
      currentCountry: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  private getFormControlValue(controlName: string): string {
    return this.signupForm.get(controlName).value;
  }

  dropdownChange($event, formControlName): void {
    this.signupForm.get(formControlName).setValue($event.name);
  }

  private setCountries(): void {
    this.userService.getCountriesList().subscribe(res=>{
      this.countriesList = res;
    });
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if(!this.signupForm.valid) return false;
    this.requestInProgress = true;
    this.userService.signupUser(this.getSignupPostData()).subscribe(res=>{
      console.log(res);
      this._router.navigate(['data-input/previous-visits']);
      this.storageService.setStorageValueByKey('id', res.id);
      this.storageService.setStorageValueByKey('email', res.email);
      this.requestInProgress = false;
    },(error)=>{
      this.requestInProgress = false;
    })
  }

  private getSignupPostData(): any {
    let responseData = {
      firstName: this.getFormControlValue('firstName'),
      lastName: this.getFormControlValue('lastName'),
      dob: this.getFormControlValue('dob'),
      userName: this.getFormControlValue('userName'),
      gender: this.getFormControlValue('gender'),
      nationality: this.getFormControlValue('nationality'),
      currentCountry: this.getFormControlValue('currentCountry'),
      contactNumber: this.getFormControlValue('contactNumber'),
      email: this.getFormControlValue('email')
    }

    return responseData;
  }



}
