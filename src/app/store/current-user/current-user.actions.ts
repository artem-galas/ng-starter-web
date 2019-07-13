import { createAction, props } from '@ngrx/store';

import { ErrorResponse, UserResponse } from '~/shared/dto';

export const getCurrentUser = createAction(
  '[Current User] Get'
);

export const getCurrentUserSuccess = createAction(
  '[Current User] Get Success',
  props<{user: UserResponse}>()
);

export const getCurrentUserFail = createAction(
  '[Current User] Get Fail',
  props<{error: ErrorResponse}>()
);
