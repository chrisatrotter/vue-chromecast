import axios, { AxiosPromise } from 'axios';
import { Dashboard } from 'src/store/models';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getDashboardList(): AxiosPromise<Dashboard[]> {
    return apiClient.get('/dashboardList');
  }
};
