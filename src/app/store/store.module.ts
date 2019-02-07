import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '../../environments/environment';

import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { CustomRouterSerializer } from './router';

@NgModule({
  imports: [
    NgrxStoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
  ]
})
export class StoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: StoreModule) {
    if (parentModule) {
      throw new Error('StoreModule already loaded. Import in root module only.');
    }
  }
}
