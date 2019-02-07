import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
  protected ngUnsubscribe: Subject<void>;

  protected constructor() {
    this.ngUnsubscribe = new Subject<void>();
  }

  trackByFn(index, item) {
    return index;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
