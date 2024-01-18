import axiosConfig from 'config';

class HelperListApi {
  async getListUser(params: any) {
    const url = '/user/list';
    const response = await axiosConfig.get(url, { params });
    return response.data;
  }

  async getListRecommend() {
    const url = '/user/recommend';
    const response = await axiosConfig.get(url);
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
}

export { HelperListApi };
