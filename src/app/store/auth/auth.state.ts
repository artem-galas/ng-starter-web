import { BaseState, baseStateInitial } from '~/store/base.state';

export interface AuthState extends BaseState {}

export const authInitialState: AuthState = {
  ...baseStateInitial
};
