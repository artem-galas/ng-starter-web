export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignUpRequest extends SignInRequest {
  passwordConfirm: string;
}

export interface AuthResponse {
  jwtToken: string;
}

