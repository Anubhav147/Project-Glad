import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AboutComponent } from './about/about.component';
import { OtpComponent } from './otp/otp.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenewComponent } from './renew/renew.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimComponent } from './claim/claim.component';
import { EstimateComponent } from './estimate/estimate.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PlansComponent } from './plans/plans.component';
import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
@NgModule({
  declarations: [
    AppComponent,
    RenewComponent,
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
    PaymentComponent,
    AdminDashboardComponent,
    ClaimStatusComponent,
    CongratulationsComponent,
    ContactComponent,
    OtpComponent,
    AboutComponent,
    ForgetPasswordComponent
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
