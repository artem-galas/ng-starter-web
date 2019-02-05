import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

/**
 * BaseService
 *
 * Contains the basic functionality for services such as `apiUrl` and provide `HttpClient`.
 * All services that can send data to server should extend this class
 * @example
 * ```
 * class SomeService extends BaseService {
 *   method() {
 *     return this.http.get(`${this.apiUrl}/some`)
 *   }
 * }
 * ```
 */
@Injectable()
export abstract class BaseService {
  protected readonly apiUrl = environment.apiUrl;
  protected constructor(protected readonly http: HttpClient) {}
}
