import { UserResponse } from '~/shared/dto';
import { BaseState, baseStateInitial } from '~/store/base.state';

export interface CurrentUserState extends BaseState {
  user: UserResponse;
}

export const currentUserInitialState: CurrentUserState = {
  ...baseStateInitial,
  user: undefined
};
