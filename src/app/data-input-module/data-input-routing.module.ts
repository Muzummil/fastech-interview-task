import { EducationLevelComponent } from './education-level/education-level.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialSavingsComponent } from './financial-savings/financial-savings.component';
import { IndustriesComponent } from './industries/industries.component';
import { InterestsComponent } from './interests/interests.component';
import { PreviousVisitsComponent } from './previous-visits/previous-visits.component';
import { SignupComponent } from './signup/signup.component';
import { WhyDubaiComponent } from './why-dubai/why-dubai.component';

const routes: Routes = [
  { path: '', component: SignupComponent, data: { animationState: 'One' } },
  { path: 'previous-visits', component: PreviousVisitsComponent, data: { animationState: 'Two' } },
  { path: 'why-dubai', component: WhyDubaiComponent, data: { animationState: 'Three' } },
  { path: 'industries', component: IndustriesComponent, data: { animationState: 'Four' } },
  { path: 'interests', component: InterestsComponent, data: { animationState: 'Five' } },
  { path: 'financial-savings', component: FinancialSavingsComponent, data: { animationState: 'Six' } },
  { path: 'education', component: EducationLevelComponent, data: { animationState: 'Seven' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataInputRoutingModule { }
