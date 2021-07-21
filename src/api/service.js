import axios from 'axios';

export default {
  createService(config) {
    return axios.create(config);
  },
  addRequestInterceptors(axiosInstance, onFulfilled, onRejected) {
    axiosInstance.interceptors.request.use(onFulfilled, onRejected);
  },
  addResponseInterceptors(axiosInstance, onFulfilled, onRejected) {
    axiosInstance.interceptors.response.use(onFulfilled, onRejected);
  },
};
