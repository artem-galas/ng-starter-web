import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CurrentUserState } from './current-user.state';

export const CURRENT_USER_STATE = 'currentUser';

const selectCurrentUserState = createFeatureSelector<CurrentUserState>(CURRENT_USER_STATE);

export const selectIsLoading = createSelector(
  selectCurrentUserState,
  (state) => state.isLoading
);

export const selectCurrentUser = createSelector(
  selectCurrentUserState,
  (state) => state.user
);

export const selectError = createSelector(
  selectCurrentUserState,
  (state) => state.isLoading
);
