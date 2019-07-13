import { ErrorResponse } from '~/shared/dto';

export interface BaseState {
  isLoading?: boolean;
  error?: ErrorResponse;
}

export const baseStateInitial: BaseState = {
  isLoading: undefined,
  error: undefined
};
