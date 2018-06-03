import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';

// HttpClient
import { HttpClientModule } from '@angular/common/http';

// ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { UserInfoComponent } from './user-info/user-info.component';
import { ContactusinfoComponent } from './contactusinfo/contactusinfo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [AdminService],
  declarations: [AdminComponent, UserInfoComponent, ContactusinfoComponent]
})
export class AdminModule { }
