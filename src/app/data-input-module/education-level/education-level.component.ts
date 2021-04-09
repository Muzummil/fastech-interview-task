import { StorageService } from '../../shared/services/storage.service';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.css']
})
export class EducationLevelComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public educationLevelOptionList = [
    { id: 'highschool', name: "High school or less", iconName: 'faLifeRing' },
    { id: 'collage', name: "Collage", iconName: 'faLifeRing' },
    { id: 'diploma', name: "Diploma", iconName: 'faLifeRing' },
    { id: 'batchelors', name: "Batchelors", iconName: 'faLifeRing' }
  ];

  public educationLevelDurationOptionList = [
    { id: 'rightnow', name: "Right now", iconName: 'faLifeRing' },
    { id: 'first', name: "0 to 3 months", iconName: 'faLifeRing' },
    { id: 'two', name: "3 to 6 months", iconName: 'faLifeRing' },
    { id: 'three', name: "6 to 12 months", iconName: 'faLifeRing' },
    { id: 'four', name: "After 1 year", iconName: 'faLifeRing' },
    { id: 'five', name: "I'm not sure", iconName: 'faLifeRing' }
  ];

  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input/financial-savings']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      educationLevel: ['', [Validators.required]],
      educationLevelDuration: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObject, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObject);
  }

  private getUserPostData(): any {
    let responseData = {
      educationLevel: this.getFormControlValue('educationLevel'),
      educationLevelDuration: this.getFormControlValue('educationLevelDuration'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-output']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
