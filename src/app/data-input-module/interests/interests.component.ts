import { StorageService } from '../../shared/services/storage.service';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public pristineFlag: boolean = true;
  public requestInProgress: boolean = false;
  public pageForm: FormGroup;

  public interestsOptionList = [
    { id: 'outdoors', name: "Outdoors", iconName: 'faLifeRing' },
    { id: 'fitness', name: "Fitness", iconName: 'faLifeRing' },
    { id: 'health', name: "Health", iconName: 'faLifeRing' },
    { id: 'travel', name: "Travel", iconName: 'faLifeRing' },
    { id: 'sports', name: "Sports", iconName: 'faLifeRing' },
    { id: 'themeparks', name: "Theme parks", iconName: 'faLifeRing' },
    { id: 'cooking', name: "Cooking", iconName: 'faLifeRing' },
    { id: 'adventure', name: "Adventure", iconName: 'faLifeRing' },
    { id: 'music', name: "Music", iconName: 'faLifeRing' },
    { id: 'fashion', name: "Fashion", iconName: 'faLifeRing' },
    { id: 'technology', name: "Technology", iconName: 'faLifeRing' },
    { id: 'architecture', name: "Architecture", iconName: 'faLifeRing' },
    { id: 'writing', name: "Writing", iconName: 'faLifeRing' },
    { id: 'gaming', name: "Gaming", iconName: 'faLifeRing' },
    { id: 'dining', name: "Dining", iconName: 'faLifeRing' },
    { id: 'history', name: "History", iconName: 'faLifeRing' },
    { id: 'theatre', name: "Theatre", iconName: 'faLifeRing' },
    { id: 'networking', name: "Networking", iconName: 'faLifeRing' },
    { id: 'art', name: "Art", iconName: 'faLifeRing' },
    { id: 'politics', name: "Politics", iconName: 'faLifeRing' },
    { id: 'fishing', name: "Fishing", iconName: 'faLifeRing' },
    { id: 'meetpeople', name: "Meet people", iconName: 'faLifeRing' },
    { id: 'podcasts', name: "Podcasts", iconName: 'faLifeRing' },
    { id: 'gambling', name: "Gambling", iconName: 'faLifeRing' },
    { id: 'selfimprovement', name: "Self improvement", iconName: 'faLifeRing' },
    { id: 'foreignlanguages', name: "Foreign languages", iconName: 'faLifeRing' },
    { id: 'movies', name: "Movies", iconName: 'faLifeRing' },
    { id: 'celebrities', name: "Celebrities", iconName: 'faLifeRing' },
    { id: 'dating', name: "Dating", iconName: 'faLifeRing' },
    { id: 'socialmedia', name: "Social media", iconName: 'faLifeRing' },
    { id: 'photography', name: "Photography", iconName: 'faLifeRing' },
  ];

  constructor(public fb: FormBuilder, private userService: UserService, private storageService: StorageService,
    private _router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['data-input/industries']);
  }

  private getFormControlValue(controlName: string): string {
    return this.pageForm.get(controlName).value;
  }

  private initForm(): void {
    this.pageForm = this.fb.group({
      interests: ['', [Validators.required]],
    });
  }

  onBadgeSelction(eventObjectArray, controlName: string): void {
    this.pageForm.get(controlName).setValue(eventObjectArray);
  }

  private getUserPostData(): any {
    let responseData = {
      interests: this.getFormControlValue('interests'),
    }

    return responseData;
  }

  public onFromSubmit(): boolean {
    this.pristineFlag = false;
    if (!this.pageForm.valid) return false;
    this.requestInProgress = true;
    this.userService.updateUserData(this.getUserPostData()).subscribe(res => {
      console.log(res);
      this._router.navigate(['data-input/financial-savings']);
      this.requestInProgress = false;
    }, (error) => {
      this.requestInProgress = false;
    })
  }

}
