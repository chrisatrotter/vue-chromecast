import { IDashboardList, IDashboard } from './models';

var dashboardJSON = require('../../resources/dashboard.json');

export function fetchDashboardList(): IDashboard[] {
  const response = dashboardJSON;
  return response.dashboardList;
}
