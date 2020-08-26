import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewComponent } from './renew/renew.component';
import { PlansComponent } from './plans/plans.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ClaimComponent } from './claim/claim.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
//import { PlanSelectComponent } from './plan-select/plan-select.component';

const routes: Routes = [
  {path: 'renew', component: RenewComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'buyInsurance', component: BuyInsuranceComponent},
  {path: 'claimInsurance', component: ClaimComponent},
  {path: 'estimate', component: EstimateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  //{path: 'plan-select', component: PlanSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }