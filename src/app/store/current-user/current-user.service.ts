import { Injectable } from '@angular/core';
import { BaseService } from '~/framework';
import { UserResponse } from '~/shared/dto';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService extends BaseService {

  loadCurrentUser() {
    return this.http.get<UserResponse>(`${this.apiUrl}/current_user`);
  }
}
