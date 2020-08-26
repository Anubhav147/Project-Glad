import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    RegistrationComponent,
    BuyInsuranceComponent,
    LoginComponent,
    NavigatorComponent,
    PlansComponent,
    RenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
