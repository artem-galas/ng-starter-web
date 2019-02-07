import { Component, OnInit } from '@angular/core';

import { I18NService } from '~/framework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly i18n: I18NService) {}

  ngOnInit(): void {
    this.i18n.init();
  }
}
