import axiosConfig from 'config';

class HelperDetailApi {
  async getDetail(id: number) {
    const url = '/user';
    const res = await axiosConfig.get(url, { params: { id: id } });
    return res.data;
  }

  async getListCategory() {
    try {
      const url = '/category/list';
      const data = await axiosConfig.get(url);
      return data?.data;
    } catch (error) {
      throw error;
    }
  }

  async createContract(payload: any) {
    const url = '/contract/create';
    const res = await axiosConfig.post(url, payload);
    return res.data;
  }
}

export { HelperDetailApi };
