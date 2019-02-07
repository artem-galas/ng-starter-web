import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { BaseService } from '~/framework/core/src/base.service';

/**
 * TokenService
 *
 * Manipulate with localStorage.
 */
@Injectable({
  providedIn: 'root'
})
export class TokenService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  static getToken(): string {
    return localStorage.getItem(environment.token);
  }

  static setToken(token: string) {
    localStorage.setItem(environment.token, token);
  }

  static hasToken(): boolean {
    return !!localStorage.getItem(environment.token);
  }

  static getUserInfoFromToken() {
    return this.parseJWT(this.getToken());
  }

  private static parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url
      .replace('-', '+')
      .replace('_', '/');

    return JSON.parse(window.atob(base64));
  }

  /**
   * loadUser
   * @description
   * Get user information from server
   */
  loadUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
