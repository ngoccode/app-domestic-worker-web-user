import axios from 'axios';
import { AddressResponse } from '../model';
import axiosConfig from 'config';

class WrapperAPi {
  async getAddress() {
    const url =
      'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';
    const response = await axios.get(url);
    return new AddressResponse(response);
  }
  async logout() {
    return await axiosConfig.post('/auth/logout');
  }
}

export { WrapperAPi };
