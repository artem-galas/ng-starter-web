import { Action, createReducer, on } from '@ngrx/store';

import {
  entityErrorFn,
  entityStartLoadingFn,
  entityStopLoadingFn
} from '~/store/entity-reducer.utils';

import { authInitialState, AuthState } from './auth.state';
import * as AuthActions from './auth.actions';

const authReducer = createReducer(
  authInitialState,
  on(
    AuthActions.signIn,
    AuthActions.signUp,
    (state) => entityStartLoadingFn(state)
  ),
  on(
    AuthActions.signInSuccess,
    AuthActions.signUpSuccess,
    (state) => entityStopLoadingFn(state)
  ),
  on(
    AuthActions.signInFail,
    AuthActions.signUpFail,
    (state, error) => entityErrorFn(state, error)
  )
);

export function authReducerFn(state: AuthState, action: Action) {
  return authReducer(state, action);
}
