import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}

  signInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signIn),
    mergeMap(signInRequest => this.authService.signIn(signInRequest)
      .pipe(
        map(authResponse => AuthActions.signInSuccess(authResponse)),
        catchError(error => observableOf(AuthActions.signInFail({error})))
      )
    )
  ));

  signUpEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUp),
    mergeMap(signUpRequest => this.authService.signUp(signUpRequest)
      .pipe(
        map(authResponse => AuthActions.signUpSuccess(authResponse)),
        catchError(error => observableOf(AuthActions.signUpFail({error})))
      )
    )
  ));
}
