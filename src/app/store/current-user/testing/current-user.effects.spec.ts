import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentUserEffects } from '../current-user.effects';

describe('CurrentUserEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CurrentUserEffects);
  });

  it('should be created', () => {
    expect(effects)
      .toBeTruthy();
  });
});
