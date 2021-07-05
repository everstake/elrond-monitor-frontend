import axios from 'axios';

const MockApi = axios.create({
  baseURL: 'https://60df0e79abbdd9001722d210.mockapi.io',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getInfoCards = async () => {
  return MockApi.get('/list');
};

export const getInfoCardsCharts = async () => {
  return MockApi.get();
}
