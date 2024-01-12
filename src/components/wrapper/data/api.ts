import axios from 'axios';
import { AddressResponse } from '../model';

class WrapperAPi {
  async getAddress() {
    const url =
      'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';
    const response = await axios.get(url);
    return new AddressResponse(response);
  }
}

export { WrapperAPi };
