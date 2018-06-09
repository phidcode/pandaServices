import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { Router } from '@angular/router';

import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthlyPaymentComponent } from './calculator/monthly-payment/monthly-payment.component';
import { AffordabilityComponent } from './calculator/affordability/affordability.component';
import { OntarioLandTransferTaxComponent } from './calculator/ontario-land-transfer-tax/ontario-land-transfer-tax.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { RegisterComponent } from './register/register.component';

import { RegistrationModule } from './registration/registration.module';
import { ApplynowComponent } from './applynow/applynow.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdviceComponent } from './advice/advice.component';
import { FaqComponent } from './faq/faq.component';
import { AdminModule } from './admin/admin.module';
import { MortgageBuilderComponent } from './mortgage-builder/mortgage-builder.component';
import { MortgageGettingStartedComponent } from './mortgage-builder/mortgage-getting-started/mortgage-getting-started.component';
import { MortgageSelectionComponent } from './mortgage-builder/mortgage-selection/mortgage-selection.component';
import { MortgageHeatMapComponent } from './mortgage-builder/mortgage-heat-map/mortgage-heat-map.component';
import { MortgageQualificationComponent } from './mortgage-builder/mortgage-qualification/mortgage-qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MonthlyPaymentComponent,
    AffordabilityComponent,
    OntarioLandTransferTaxComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutComponent,
    HowItWorksComponent,
    HeaderComponent,
    FooterComponent,
    SplashComponent,
    ApplynowComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ApplynowComponent,
    PrivacyComponent,
    AdviceComponent,
    FaqComponent,
    MortgageBuilderComponent,
    MortgageGettingStartedComponent,
    MortgageSelectionComponent,
    MortgageHeatMapComponent,
    MortgageQualificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'pandaServices'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    ReactiveFormsModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    RegistrationModule,
    AdminModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    AuthService,
    UserService,
    UserResolver,
    AuthGuard,
    // {
    //   provide: MatStepperIntl,
    //   useClass: MyIntl
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
