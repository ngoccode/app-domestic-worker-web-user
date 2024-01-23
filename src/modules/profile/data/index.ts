import axios from 'axios';
import axiosConfig from 'config';

class ProfileApi {
  async update(payload: any) {
    const url = '/user/update';
    return await axiosConfig.put(url, payload);
  }
  async upload(payload: any) {
    const url = `${process.env.REACT_APP_BASE_URL}/image/upload`;
    const form = new FormData();
    form.append('image', payload);
    const response = await axios.post(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}

export { ProfileApi };
