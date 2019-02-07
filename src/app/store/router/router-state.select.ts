import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './router-serializer';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentUrl = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state && state.state.url
);

export const getQueryParams = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state && state.state.queryParams
);
