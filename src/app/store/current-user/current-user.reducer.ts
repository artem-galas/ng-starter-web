import { Action, createReducer, on } from '@ngrx/store';
import { currentUserInitialState, CurrentUserState } from './current-user.state';

import {
  entityErrorFn,
  entityStartLoadingFn,
  entityStopLoadingFn
} from '~/store/entity-reducer.utils';

import * as CurrentUserActions from './current-user.actions';

const currentUserReducer = createReducer<CurrentUserState>(
  currentUserInitialState,
  on(
    CurrentUserActions.getCurrentUser,
    (state) => entityStartLoadingFn(state)
  ),
  on(
    CurrentUserActions.getCurrentUserSuccess,
    (state, {user}) => entityStopLoadingFn({...state, user})
  ),
  on(
    CurrentUserActions.getCurrentUserFail,
    (state, error) => entityErrorFn(state, error)
  )
);

export function currentUserReducerFn(state: CurrentUserState, action: Action) {
  return currentUserReducer(state, action);
}
