import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-visits',
  templateUrl: './previous-visits.component.html',
  styleUrls: ['./previous-visits.component.css']
})
export class PreviousVisitsComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public yesNoOptionList = [
    { id: 'yes', name: "Yes", iconName: 'faThumbsUp' },
    { id: 'no', name: "No", iconName: 'faThumbsDown' },
  ];

  public stayingPeriodList = [
    { id: 'threemonths', name: "Upto 3 months", iconName: 'faCalendarCheck' },
    { id: 'threetosixmonths', name: "3 to 6 months", iconName: 'faCalendarCheck' },
    { id: 'sixtotwelvemonths', name: "6 to 12 months", iconName: 'faCalendarCheck' },
    { id: 'twelveplusmonths', name: "+12 months", iconName: 'faCalendarCheck' },
    { id: 'threeyears', name: "+3 years", iconName: 'faCalendarCheck' },
  ];
  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      visitedBefore: ['', [Validators.required]],
      familyInDubai: ['', [Validators.required]],
      stayingPeriod: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObject, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObject);
  }

  private getUserPostData(): any {
    let responseData = {
      visitedBefore: this.getFormControlValue('visitedBefore'),
      familyInDubai: this.getFormControlValue('familyInDubai'),
      stayingPeriod: this.getFormControlValue('stayingPeriod'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-input/why-dubai']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
