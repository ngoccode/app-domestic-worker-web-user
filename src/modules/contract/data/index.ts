import axiosConfig from 'config';

class ContractApi {
  async getList(params: any) {
    const url = '/contract/list';
    const response = await axiosConfig.get(url, { params });
    return response.data;
  }

  async putStatus(payload: any) {
    const url = '/contract/update/status';
    const response = await axiosConfig.put(url, payload);
    return response.data;
  }
}

export { ContractApi };
