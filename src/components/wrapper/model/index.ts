import { AxiosResponse } from 'axios';

class AddressResponse {
  address: {
    Id: string;
    Name: string;
    Districts: {
      Id: string;
      Name: string;
      Wards: {
        Id: string;
        Name: string;
      }[];
    }[];
  }[];
  constructor(response: AxiosResponse) {
    this.address = response?.data ?? [];
  }
}

export { AddressResponse };
