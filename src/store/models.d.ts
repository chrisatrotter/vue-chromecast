export interface IDashboard {
  id: string;
  name: string;
  display: boolean;
  dashboard?: IChromeCastDashboard[] | [];
}

export interface IDashboardList {
  dashboardList?: IDashboard[] | [];
}

export interface IChromeCastDashboard {
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
