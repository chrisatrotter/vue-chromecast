import axios, { AxiosPromise } from 'axios';
import { IDashboard } from 'src/store/models';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getDashboardList(): AxiosPromise<IDashboard[]> {
    return apiClient.get('/dashboardList');
  }
};
