import { StorageService } from '../../shared/services/storage.service';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public yesNoOptionList = [
    { id: 'construction', name: "Construction", iconName: 'faLifeRing' },
    { id: 'hospitality', name: "Hospitality", iconName: 'faLifeRing' },
    { id: 'realestate', name: "Real estate", iconName: 'faLifeRing' },
    { id: 'Tourism', name: "Tourism", iconName: 'faLifeRing' },
    { id: 'manufacturing', name: "Manufacturing", iconName: 'faLifeRing' },
    { id: 'farming', name: "Farming", iconName: 'faLifeRing' },
    { id: 'fishing', name: "Fishing", iconName: 'faLifeRing' },
    { id: 'education', name: "Education", iconName: 'faLifeRing' },
    { id: 'publicservices', name: "Public services", iconName: 'faLifeRing' },
    { id: 'administration', name: "Administration", iconName: 'faLifeRing' },
    { id: 'technology', name: "Technology", iconName: 'faLifeRing' },
    { id: 'media', name: "Media", iconName: 'faLifeRing' },
    { id: 'financialservices', name: "Financial services", iconName: 'faLifeRing' },
    { id: 'legal', name: "Legal", iconName: 'faLifeRing' },
    { id: 'healthcare', name: "Health care", iconName: 'faLifeRing' },
    { id: 'government', name: "Government", iconName: 'faLifeRing' },
    { id: 'medical', name: "Medical", iconName: 'faLifeRing' },
    { id: 'security', name: "Security", iconName: 'faLifeRing' },
    { id: 'logistics', name: "Logistics", iconName: 'faLifeRing' },
    { id: 'robotics', name: "Robotics", iconName: 'faLifeRing' },
    { id: 'fashion', name: "Fashion", iconName: 'faLifeRing' },
    { id: 'automotive', name: "Automotive", iconName: 'faLifeRing' },
    { id: 'transportation', name: "Transportation", iconName: 'faLifeRing' },
    { id: 'customersupport', name: "Customer support", iconName: 'faLifeRing' },
  ];

  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input/why-dubai']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      industries: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObjectArray, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObjectArray);
  }

  private getUserPostData(): any {
    let responseData = {
      industries: this.getFormControlValue('industries'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-input/interests']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
