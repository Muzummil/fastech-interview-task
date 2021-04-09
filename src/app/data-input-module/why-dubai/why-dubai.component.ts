import { StorageService } from './../../shared/services/storage.service';
import { UserService } from './../../shared/services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-dubai',
  templateUrl: './why-dubai.component.html',
  styleUrls: ['./why-dubai.component.css']
})
export class WhyDubaiComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public whyDubaiList = [
    { id: 'lifestyle', name: "Lifestyle", iconName: 'faLifeRing' },
    { id: 'workopportunities', name: "Work opportunities", iconName: 'faLifeRing' },
    { id: 'education', name: "Education", iconName: 'faLifeRing' },
    { id: 'finance', name: "Finance", iconName: 'faLifeRing' },
    { id: 'tourism', name: "Tourism", iconName: 'faLifeRing' },
    { id: 'family', name: "Family", iconName: 'faLifeRing' },
    { id: 'business', name: "Business", iconName: 'faLifeRing' },
    { id: 'security', name: "Security", iconName: 'faLifeRing' },
    { id: 'culture', name: "Culture", iconName: 'faLifeRing' },
  ];

  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input/previous-visits']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      whydubai: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObject, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObject);
  }

  private getUserPostData(): any {
    let responseData = {
      whydubai: this.getFormControlValue('whydubai'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-input/industries']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
