import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
  MutationAction
} from 'vuex-module-decorators';
import Store from '../index';
import { IDashboardList, IDashboard } from '../models';
import { fetchDashboardList } from '../api';

var dashboardJSON = require('../../../resources/dashboard.json');

@Module({
  dynamic: true,
  name: 'dashboardList',
  namespaced: true,
  store: Store
})
class DashboardListModule extends VuexModule implements IDashboardList {
  public dashboardList: IDashboard[] = [];

  getDashboardList() {
    const dashboardList = fetchDashboardList();
    return { dashboardList };
  }

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
  private GET_DUMMY_DASHBOARD_INFORMATION(dashboards: IDashboard[]) {
    this.dashboardList = dashboards;
    console.log(dashboards);
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
  public getDummyDashboardInformation() {
    this.GET_DUMMY_DASHBOARD_INFORMATION(JSON.parse(dashboardJSON).data);
  }
}

export default getModule(DashboardListModule);
