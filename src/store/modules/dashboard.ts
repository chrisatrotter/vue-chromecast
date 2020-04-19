import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import { uid } from 'quasar';
import { Dashboard, ChromeCastDashboard } from '../models';

@Module({
  dynamic: true,
  name: 'dashboard',
  namespaced: true,
  store: Store
})
class DashboardModule extends VuexModule {
  public chromeCastDashboard: ChromeCastDashboard[] = [];
  public dashboard: Dashboard = {
    id: '',
    name: '',
    display: false,
    chromeCastDashboard: this.chromeCastDashboard
  };

  @Mutation
  private SET_ID() {
    this.dashboard.id = uid();
  }

  @Mutation
  private SET_NAME(name: string) {
    this.dashboard.name = name;
  }

  @Mutation
  private SET_DISPLAY(display: boolean) {
    this.dashboard.display = display;
  }

  @Mutation
  private SET_DASHBOARD(dashboard: Dashboard) {
    this.dashboard = dashboard;
  }

  @Mutation
  public ADD_DASHBOARD(chromeCastDashboard: ChromeCastDashboard) {
    this.chromeCastDashboard.push(chromeCastDashboard);
  }

  @Mutation
  private REMOVE_DASHBOARD(chromeCastDashboards: ChromeCastDashboard) {
    this.chromeCastDashboard = this.chromeCastDashboard.filter(
      (value: ChromeCastDashboard) => value.id != chromeCastDashboards.id
    );
  }

  @Action
  public setDashboard(dashboard: Dashboard) {
    this.SET_DASHBOARD(dashboard);
  }

  @Action
  public setId() {
    this.SET_ID();
  }

  @Action
  public setName(value: string) {
    this.SET_NAME(value);
  }

  @Action
  public setDisplay(value: boolean) {
    this.SET_DISPLAY(value);
  }

  @Action
  public toggleDisplay() {
    this.SET_DISPLAY(!this.dashboard.display);
  }

  @Action
  public getChromeCastDashboardInformation() {}

  @Action
  public addDashboard(chromeDashboard: ChromeCastDashboard) {
    this.ADD_DASHBOARD(chromeDashboard);
  }

  @Action
  public removeDashboard(chromeDashboard: ChromeCastDashboard) {
    this.REMOVE_DASHBOARD(chromeDashboard);
  }
}

export default getModule(DashboardModule);
