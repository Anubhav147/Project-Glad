import { AppComponent } from './../../../App1/src/app/app.component';
import { ClaimComponent } from './claim/claim.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'buyInsurance', component: BuyInsuranceComponent},
  {path: 'claimInsurance', component: ClaimComponent},
  {path: 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
