import { DataInputRoutingModule } from './data-input-routing.module';
import { EducationLevelComponent } from './education-level/education-level.component';
import { FinancialSavingsComponent } from './financial-savings/financial-savings.component';
import { InterestsComponent } from './interests/interests.component';
import { IndustriesComponent } from './industries/industries.component';
import { WhyDubaiComponent } from './why-dubai/why-dubai.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PreviousVisitsComponent } from './previous-visits/previous-visits.component';
@NgModule({
  declarations: [SignupComponent, PreviousVisitsComponent, WhyDubaiComponent, IndustriesComponent, InterestsComponent,
  FinancialSavingsComponent, EducationLevelComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    DataInputRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
  providers: [ FontAwesomeModule, FormBuilder ]
})
export class DataInputModule { }
