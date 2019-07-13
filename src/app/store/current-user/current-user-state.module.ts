import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CurrentUserEffects } from './current-user.effects';
import { currentUserReducerFn } from './current-user.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('currentUser', currentUserReducerFn),
    EffectsModule.forFeature([CurrentUserEffects])
  ]
})
export class CurrentUserStateModule { }
