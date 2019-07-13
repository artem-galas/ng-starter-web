import { createAction, props } from '@ngrx/store';
import { AuthResponse, ErrorResponse, SignInRequest, SignUpRequest } from '~/shared/dto';

export const signIn = createAction(
  '[Auth] Sign In',
  props<SignInRequest>()
);

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<AuthResponse>()
);

export const signInFail = createAction(
  '[Auth] Sign In Fail',
  props<{error: ErrorResponse}>()
);

export const signUp = createAction(
  '[Auth] Sign Up',
  props<SignUpRequest>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<AuthResponse>()
);

export const signUpFail = createAction(
  '[Auth] Sign Up Fail',
  props<{error: ErrorResponse}>()
);
