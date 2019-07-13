import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as CurrentUserActions from './current-user.actions';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class CurrentUserEffects {
  constructor(private readonly actions$: Actions,
              private readonly currentUserService: CurrentUserService) {}

  getCurrentUserEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentUserActions.getCurrentUser),
    mergeMap(() => this.currentUserService.loadCurrentUser()
      .pipe(
        map((user) => CurrentUserActions.getCurrentUserSuccess({user})),
        catchError(error => observableOf(CurrentUserActions.getCurrentUserFail({error})))
      )
    )
  ));
}
