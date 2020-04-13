import { IDashboardList, IDashboard } from './models';

var dashboardJSON = require('resources/dashboard.json');

export async function fetchDashboardList() {
  const response = dashboardJSON;
  return response.dashboardList as IDashboard[];
}
