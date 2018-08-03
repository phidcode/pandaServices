import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContactusinfoComponent } from './contactusinfo/contactusinfo.component';
import { MortgageInfoComponent } from './mortgage-info/mortgage-info.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MortgageInfoComponent
      },
      {
        path: 'contactUs',
        component: ContactusinfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
