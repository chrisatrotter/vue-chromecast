import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import { DashboardList, Dashboard } from '../models';
import DashboardService from '../../services/DashboardAPI';
import { AxiosResponse } from 'axios';

@Module({
  dynamic: true,
  name: 'dashboardList',
  namespaced: true,
  store: Store
})
class DashboardListModule extends VuexModule implements DashboardList {
  public dashboardList: Dashboard[] = [];

  @Mutation
  private ADD_DASHBOARD(dashboard: Dashboard) {
    this.dashboardList.push(dashboard);
  }

  @Mutation
  private REMOVE_DASHBOARD(dashboard: Dashboard) {
    this.dashboardList = this.dashboardList.filter(
      (value: Dashboard) => value.id != dashboard.id
    );
  }

  @Mutation
  private SET_DASHBOARDS(dashboards: Dashboard[]) {
    this.dashboardList = dashboards;
  }

  @Mutation
  private GET_DASHBOARD(id: string) {
    this.dashboardList.find((dashboard: Dashboard) =>
      dashboard.id.localeCompare(id)
    );
  }

  @Action
  public addDashboard(dashboard: Dashboard) {
    this.ADD_DASHBOARD(dashboard);
  }

  @Action
  public removeDashboard(dashboard: Dashboard) {
    this.REMOVE_DASHBOARD(dashboard);
  }

  @Action
  public getDashboard(id: string) {
    this.GET_DASHBOARD(id);
  }

  @Action
  public async loadDashboards() {
    const {
      data
    }: AxiosResponse<Dashboard[]> = await DashboardService.getDashboardList();
    console.log('what is data? ' + data[0]);
    const dashboards: Dashboard[] = data;

    console.log('what is dashboard: ' + dashboards);

    if (dashboards != undefined) this.SET_DASHBOARDS(dashboards);
  }
}

export default getModule(DashboardListModule);
