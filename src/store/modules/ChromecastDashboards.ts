import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import DashboardService from '../../services/DashboardAPI';
import { AxiosResponse } from 'axios';
import ChromecastDashboard from 'src/model/ChromecastDashboard';

@Module({
  dynamic: true,
  name: 'chromecastDashboards',
  namespaced: true,
  store: Store
})
class ChromecastDashboardModule extends VuexModule {
  public chromecastDashboards: ChromecastDashboard[] = [];

  @Mutation
  private SET_CHROMECAST_DASHBOARDS(
    chromecastDashboards: ChromecastDashboard[]
  ) {
    this.chromecastDashboards = [];
    chromecastDashboards.forEach((chromecastDashboard: ChromecastDashboard) =>
      this.chromecastDashboards.push(
        new ChromecastDashboard(
          chromecastDashboard.dashboardCollectionId,
          chromecastDashboard
        )
      )
    );
  }

  @Mutation
  private ADD_CHROMECAST_DASHBOARD(dashboard: ChromecastDashboard) {
    this.chromecastDashboards.push(
      new ChromecastDashboard(dashboard.dashboardCollectionId, dashboard)
    );
  }

  @Mutation
  private REMOVE_CHROMECAST_DASHBOARD(dashboard: ChromecastDashboard) {
    this.chromecastDashboards = this.chromecastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        dashboard.id != chromecastDashboard.id
    );
  }

  @Mutation
  private UPDATE_CHROMECAST_DASHBOARD(dashboard: ChromecastDashboard) {
    this.chromecastDashboards = this.chromecastDashboards.map(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.id == dashboard.id ? dashboard : chromecastDashboard
    );
  }

  @Mutation
  private TOGGLE_IS_EDITING(dashboard: ChromecastDashboard) {
    dashboard.isEditing = !dashboard.isEditing;
  }

  @Action
  public async addChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.postChromecastDashboard(dashboard);
    this.ADD_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public async removeChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.deleteChromecastDashboard(dashboard.id);
    this.REMOVE_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public async updateChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.putChromecastDashboard(dashboard);
    this.UPDATE_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public toggleIsEditing(chromecastDashboard: ChromecastDashboard) {
    this.TOGGLE_IS_EDITING(chromecastDashboard);
  }

  @Action
  public async loadChromecastDashboards() {
    const {
      data
    }: AxiosResponse<ChromecastDashboard[]> = await DashboardService.getChromecastDashboards();

    if (data != undefined) this.SET_CHROMECAST_DASHBOARDS(data);
  }
}

export default getModule(ChromecastDashboardModule);
