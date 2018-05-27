import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { PageNotFoundComponent } from './not-found.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthlyPaymentComponent } from './calculator/monthly-payment/monthly-payment.component';
import { AffordabilityComponent } from './calculator/affordability/affordability.component';
import { OntarioLandTransferTaxComponent } from './calculator/ontario-land-transfer-tax/ontario-land-transfer-tax.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { MortgagesComponent } from './mortgages/mortgages.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SplashComponent } from './splash/splash.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdviceComponent } from './advice/advice.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'mortgages', component: MortgagesComponent },
  { path: 'calculator/monthlyPayment', component: MonthlyPaymentComponent },
  { path: 'calculator/affordability', component: AffordabilityComponent },
  { path: 'calculator/ontarioLandTransferTax', component: OntarioLandTransferTaxComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'advice', component: AdviceComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, resolve: { data: UserResolver } },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
