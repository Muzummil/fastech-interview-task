import { StorageService } from '../../shared/services/storage.service';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-savings',
  templateUrl: './financial-savings.component.html',
  styleUrls: ['./financial-savings.component.css']
})
export class FinancialSavingsComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public financialOptionList = [
    { id: 'none', name: "No savings", iconName: 'faLifeRing' },
    { id: 'one', name: "0 to 1000 AED", iconName: 'faLifeRing' },
    { id: 'two', name: "1000 to 5000 AED", iconName: 'faLifeRing' },
    { id: 'three', name: "5000 to 10,000 AED", iconName: 'faLifeRing' },
    { id: 'four', name: "10,000 to 20,000 AED", iconName: 'faLifeRing' },
    { id: 'five', name: "20,000 to 50,000 AED", iconName: 'faLifeRing' },
    { id: 'six', name: "+50,000 AED", iconName: 'faLifeRing' }
  ];

  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input/interests']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      financialSavings: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObject, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObject);
  }

  private getUserPostData(): any {
    let responseData = {
      financialSavings: this.getFormControlValue('financialSavings'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-input/education']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
