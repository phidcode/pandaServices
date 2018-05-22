import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';

const routes: Routes = [
  { path: 'applyNow', redirectTo: 'applyNow/step1of3' },
  { path: 'applyNow/step1of3', component: RegistrationStep1Component },
  { path: 'applyNow/step2of3', component: RegistrationStep2Component },
  { path: 'applyNow/step3of3', component: RegistrationStep3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
