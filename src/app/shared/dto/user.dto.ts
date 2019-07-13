import { BaseDto } from './base.dto';

export interface UserResponse extends BaseDto {
  name: string;
  age: number;
}

export interface UserRequest {
  name: string;
  age: number;
  password: string;
}
