import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { SplashComponent } from './splash/splash.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'mortgages', component: MortgagesComponent},
  { path: 'calculator/monthlyPayment', component: MonthlyPaymentComponent },
  { path: 'calculator/affordability', component: AffordabilityComponent},
  { path: 'calculator/ontarioLandTransferTax', component: OntarioLandTransferTaxComponent},
  { path: 'applyNow', component: RegistrationComponent },
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'howItWorks', component: HowItWorksComponent},
  { path: 'login', component: AuthenticationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
