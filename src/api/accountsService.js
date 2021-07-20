import axios from 'axios';

const MockApi = axios.create({
  baseURL: 'https://60df0e79abbdd9001722d210.mockapi.io',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getAccounts = async () => {
  return MockApi.get('/accounts');
};

export const getInfoCardsCharts = async () => {
  return MockApi.get();
};
