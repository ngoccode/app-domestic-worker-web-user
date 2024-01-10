import axios from 'axios';
import { RegisterPayload } from '../../model';

class RegisterApi {
  async register(value: RegisterPayload) {
    const url = '/auth/register';
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      value
    );
    return response?.data?.status === 200;
  }
}

export { RegisterApi };
