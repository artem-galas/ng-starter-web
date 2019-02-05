import { NgModule } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { MockTranslateService } from './mocks/translate-service.mock';

@NgModule({
  providers: [
    {
      provide: TranslateService,
      useClass: MockTranslateService
    }
  ]
})
export class I18NTestingModule {
}
