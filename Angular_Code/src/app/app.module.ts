import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimComponent } from './claim/claim.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { LoginComponent } from './login/login.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PlansComponent } from './plans/plans.component';
import { RenewComponent } from './renew/renew.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    RegistrationComponent,
    BuyInsuranceComponent,
    LoginComponent,
    NavigatorComponent,
    PlansComponent,
    RenewComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ContactComponent,
    AboutComponent,
    ForgetPasswordComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
