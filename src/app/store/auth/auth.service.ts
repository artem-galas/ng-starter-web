import { Injectable } from '@angular/core';

import { BaseService } from '~/framework';
import { AuthResponse, SignInRequest, SignUpRequest } from '~/shared/dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  signIn(signInData: SignInRequest) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/sign_in`, signInData);
  }

  signUp(signUpData: SignUpRequest) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/sign_in`, signUpData);
  }
}
