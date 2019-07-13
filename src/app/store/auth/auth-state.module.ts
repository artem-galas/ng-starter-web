import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducerFn } from './auth.reducer';
import { AuthEffects } from './auth.effects';
import { AUTH_STATE } from './auth.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_STATE, authReducerFn),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStateModule {
}
