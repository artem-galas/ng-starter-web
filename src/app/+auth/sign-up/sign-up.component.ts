import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BuildForm } from '~/framework';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, BuildForm {

  signUpForm: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = this.fb.group({
      username: [null, Validators.compose(
        [Validators.required]
      )],
      password: [null, Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      passwordConfirm: [null, Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )]
    });
  }

  submitSignUpForm() {
    console.log(this.signUpForm.value)
  }

}
