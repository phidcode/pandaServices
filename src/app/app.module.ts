import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthlyPaymentComponent } from './calculator/monthly-payment/monthly-payment.component';
import { AffordabilityComponent } from './calculator/affordability/affordability.component';
import { OntarioLandTransferTaxComponent } from './calculator/ontario-land-transfer-tax/ontario-land-transfer-tax.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { MortgagesComponent } from './mortgages/mortgages.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MonthlyPaymentComponent,
    AffordabilityComponent,
    OntarioLandTransferTaxComponent,
    ContactUsComponent,
    ServicesComponent,
    MortgagesComponent,
    AboutComponent,
    RegistrationComponent,
    HowItWorksComponent,
    HeaderComponent,
    FooterComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
