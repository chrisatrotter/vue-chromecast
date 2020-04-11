import axios from 'axios';

const dashboardData = require('../../resources/dashboard.json');

class DashboardAPI {
  getDashboard() {
    return JSON.parse(dashboardData);
  }
}
