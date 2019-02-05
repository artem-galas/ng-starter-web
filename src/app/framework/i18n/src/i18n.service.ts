import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class I18NService {
  defaultLanguage = 'en';
  availableLanguages = ['en', 'fr'];

  constructor(private readonly translate: TranslateService) {}

  init() {
    this.translate.addLangs(this.availableLanguages);
    this.translate.setDefaultLang(this.defaultLanguage);
    this.translate.use(this.defaultLanguage);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
