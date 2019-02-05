import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BuildForm } from '~/framework';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, BuildForm {

  signInForm: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signInForm = this.fb.group({
      username: [null, Validators.compose(
        [Validators.required]
      )],
      password: [null, Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )]
    });
  }

  submitSignInForm() {
    console.log(this.signInForm.value);
  }

}
