import { LoginPayload, LoginResponse } from '../../model';
import axios from 'axios';

class LoginApi {
  async login(payload: LoginPayload) {
    const url = '/auth/login';
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      payload
    );
    return new LoginResponse(response);
  }
}

export { LoginApi };
