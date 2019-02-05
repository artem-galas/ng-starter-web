import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { I18NService } from './src/i18n.service';

export function translateFactory(http: HttpClient, location: Location) {
  return new TranslateHttpLoader(http, location.prepareExternalUrl('./assets/i18n/'), '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot()
  ],
  providers: [
    I18NService
  ],
  exports: [
    TranslateModule
  ]
})
export class I18NModule {
  static forRoot(configuredProviders?: Array<any>): ModuleWithProviders {

    return {
      ngModule: I18NModule,
      providers: configuredProviders
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: I18NModule) {
    if (parentModule) {
      throw new Error('I18NModule already loaded. Import in root module only.');
    }
  }
}
