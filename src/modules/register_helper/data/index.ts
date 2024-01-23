import axios from 'axios';
import axiosConfig from 'config';

class RegisterHelperApi {
  async getListCategory() {
    try {
      const url = '/category/list';
      const data = await axiosConfig.get(url);
      return data?.data;
    } catch (error) {
      throw error;
    }
  }

  async create(payload: any) {
    const url = '/user/create';
    return await axiosConfig.post(url, payload);
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
  async getListRole() {
    const url = '/role/list';
    const response = await axiosConfig.get(url);
    return response.data;
  }

  async createProfile(payload: any) {
    const url = '/profile/create';
    return await axiosConfig.post(url, payload);
  }
}
export { RegisterHelperApi };
