import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenewComponent } from './renew/renew.component';
//import { PlanSelectComponent } from './plan-select/plan-select.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimComponent } from './claim/claim.component';
import { EstimateComponent } from './estimate/estimate.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PlansComponent } from './plans/plans.component';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EntityComponent } from './entity/entity.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RenewComponent,
    //PlanSelectComponent,
    LoginComponent,
    RegistrationComponent,
    BuyInsuranceComponent,
    ClaimComponent,
    EstimateComponent,
    LogoutComponent,
    NavigatorComponent,
    PlansComponent,
    HomeComponent,
    ModelComponent,
    UserDashboardComponent,
    EntityComponent,
    PaymentComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
