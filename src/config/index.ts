import axios from 'axios';
import { AXIOS_TIMEOUT } from 'constance';
import queryString from 'query-string';

const AuthService = {
  getUserInfo: () => {
    return JSON.parse(localStorage.getItem('token') || '{}');
  },
  getAccessToken: () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    return token;
  },
  getRefreshToken: () => {
    const token = JSON.parse(localStorage.getItem('refresh_token') || '{}');
    return token;
  },
};

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: AXIOS_TIMEOUT,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken();
    if (token && config.headers) {
      config.headers['Authorization'] =
        'Bearer ' + AuthService.getAccessToken();
    }
    if (config.headers) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url === '') {
      window.location.replace(window.location.hostname + '/app-login');
      return Promise.reject(error);
    } else if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = AuthService.getRefreshToken();
      return axios
        .post('/auth/refresh', {
          refresh_token: refreshToken,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('user', response.data.results);
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + AuthService.getAccessToken();
            return axios(originalRequest);
          }
        });
    } else {
      throw error?.response?.data ? error.response.data : error.response;
    }
  }
);

export default axiosConfig;
