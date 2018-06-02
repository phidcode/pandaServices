import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { UserInfoComponent } from './user-info/user-info.component';

// HttpClient
import { HttpClientModule } from '@angular/common/http';

// ag-grid
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [AdminService],
  declarations: [AdminComponent, UserInfoComponent]
})
export class AdminModule { }
