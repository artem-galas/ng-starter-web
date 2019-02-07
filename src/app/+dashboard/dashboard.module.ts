import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '~/framework';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardIndexComponent
  ]
})
export class DashboardModule {}
