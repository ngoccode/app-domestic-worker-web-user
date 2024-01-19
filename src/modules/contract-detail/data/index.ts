import axiosConfig from 'config';

class ContractDetailApi {
  async getContractDetail(id: string | number) {
    const url = `/contract`;
    const response = await axiosConfig.get(url, { params: { id } });
    return response?.data?.results;
  }

  async putStatus(payload: any) {
    const url = '/contract/update/status';
    const response = await axiosConfig.put(url, payload);
    return response.data;
  }

  async createReview(payload: any) {
    const url = '/contract/review';
    const response = await axiosConfig.post(url, payload);
    return response.data;
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
  async updateContract(payload: any) {
    const url = '/contract/update';
    const res = await axiosConfig.put(url, payload);
    return res.data;
  }
}

export { ContractDetailApi };
