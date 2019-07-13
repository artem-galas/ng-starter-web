import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const AUTH_STATE = 'auth';

const selectAuthState = createFeatureSelector<AuthState>(AUTH_STATE);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
