import { AxiosResponse } from 'axios';

class LoginPayload {
  phone_number: string;
  password: string;
  constructor({
    phoneNumber = '',
    password = '',
  }: {
    phoneNumber: string;
    password: string;
  }) {
    this.phone_number = phoneNumber;
    this.password = password;
  }
}

class LoginResponse {
  token: string;
  refreshToken: string;
  user: any;
  constructor(data: AxiosResponse) {
    this.token = data.data?.results?.token ?? '';
    this.refreshToken = data.data?.results?.refreshToken ?? '';
    this.user = data.data?.results?.user ?? null;
  }
}

export { LoginPayload, LoginResponse };
