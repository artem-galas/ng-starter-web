import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '~/framework';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './home-index/home-index.component';

@NgModule({
  declarations: [HomeIndexComponent],
  imports: [
    SharedModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
