export interface Dashboard {
  id: string;
  name: string;
  display: boolean;
  chromeCastDashboard?: ChromeCastDashboard[];
}

export interface DashboardList {
  dashboardList?: Dashboard[];
}

export interface ChromeCastDashboard {
  id: string;
  name: string;
  show: boolean;
  interval: number;
  intervalOptions: number[];
  url: string;
  licenseurl: string;
  drm: string;
  drmOptions: string[];
  isEditing: boolean;
}
