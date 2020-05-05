import axios, { AxiosPromise } from 'axios';
import ChromecastDashboard from 'src/model/ChromecastDashboard';
import DashboardCollection from 'src/model/DashboardCollection';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const dashboardCollections = '/dashboardCollections';
const chromecastDashboards = '/chromecastDashboards';

export default {
  getDashboardCollections(): AxiosPromise<DashboardCollection[]> {
    return apiClient.get(dashboardCollections);
  },
  getChromecastDashboards(): AxiosPromise<ChromecastDashboard[]> {
    return apiClient.get(chromecastDashboards);
  },
  getDashboardCollection(
    dashboardCollectionId: string
  ): AxiosPromise<DashboardCollection> {
    return apiClient.get(`${dashboardCollections}/${dashboardCollectionId}`);
  },
  getChromecastDashboard(
    chromecastDashboardId: string
  ): AxiosPromise<ChromecastDashboard> {
    return apiClient.get(`${chromecastDashboards}/${chromecastDashboardId}`);
  },
  putDashboardCollection(dashboardCollection: DashboardCollection) {
    return apiClient.put(
      `${dashboardCollections}/${dashboardCollection.id}`,
      dashboardCollection
    );
  },
  putChromecastDashboard(chromecastDashboard: ChromecastDashboard) {
    return apiClient.put(
      `${chromecastDashboards}/${chromecastDashboard.id}`,
      chromecastDashboard
    );
  },
  postDashboardCollection(dashboardCollection: DashboardCollection) {
    return apiClient.post(dashboardCollections, dashboardCollection);
  },
  postChromecastDashboard(chromecastDashboard: ChromecastDashboard) {
    return apiClient.post(chromecastDashboards, chromecastDashboard);
  },
  deleteDashboardCollection(
    dashboardCollectionId: string
  ): AxiosPromise<DashboardCollection> {
    return apiClient.delete(`${dashboardCollections}/${dashboardCollectionId}`);
  },
  deleteChromecastDashboard(
    chromecastDashboardId: string
  ): AxiosPromise<DashboardCollection> {
    return apiClient.delete(`${chromecastDashboards}/${chromecastDashboardId}`);
  }
};
