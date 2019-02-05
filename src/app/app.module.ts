import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';

import { TranslateLoader } from '@ngx-translate/core';

import { HttpInterceptorModule, I18NModule, MaterialModule, SharedModule, translateFactory } from '~/framework';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    MatNativeDateModule,
    HttpInterceptorModule,
    I18NModule.forRoot([
      {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient, Location]
      }
    ]),
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
