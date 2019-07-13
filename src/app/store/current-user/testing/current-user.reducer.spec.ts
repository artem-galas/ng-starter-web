import { currentUserReducerFn } from '../current-user.reducer';
import { currentUserInitialState } from '../current-user.state';

describe('currentUserReducerFn', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currentUserReducerFn(currentUserInitialState, action);

      expect(result)
        .toBe(currentUserInitialState);
    });
  });
});
