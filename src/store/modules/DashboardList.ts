import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import { IDashboardList, IDashboard } from '../models';
import DashboardService from '../../services/DashboardAPI';
import { AxiosResponse } from 'axios';

var dashboardJSON = require('../../../resources/dashboard.json');

@Module({
  dynamic: true,
  name: 'dashboardList',
  namespaced: true,
  store: Store
})
class DashboardListModule extends VuexModule implements IDashboardList {
  public dashboardList: IDashboard[] = [];

  @Mutation
  private ADD_DASHBOARD(dashboard: IDashboard) {
    this.dashboardList.push(dashboard);
  }

  @Mutation
  private REMOVE_DASHBOARD(dashboard: IDashboard) {
    this.dashboardList = this.dashboardList.filter(
      (value: IDashboard) => value.id != dashboard.id
    );
  }

  @Mutation
  private SET_DASHBOARDS(dashboards: IDashboard[]) {
    this.dashboardList = dashboards;
  }

  @Action
  public addDashboard(dashboard: IDashboard) {
    this.ADD_DASHBOARD(dashboard);
  }

  @Action
  public removeDashboard(dashboard: IDashboard) {
    this.REMOVE_DASHBOARD(dashboard);
  }

  @Action
  public async loadDashboards() {
    const {
      data
    }: AxiosResponse<IDashboard[]> = await DashboardService.getDashboardList();
    console.log('what is data? ' + data[0]);
    const dashboards: IDashboard[] = data;

    console.log('what is dashboard: ' + dashboards);

    if (dashboards != undefined) this.SET_DASHBOARDS(dashboards);
  }
}

export default getModule(DashboardListModule);
