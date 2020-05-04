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
import DashboardCollection from 'src/model/DashboardCollection';

@Module({
  dynamic: true,
  name: 'dashboardCollections',
  namespaced: true,
  store: Store
})
class DashboardCollectionsModule extends VuexModule {
  public dashboardCollections: DashboardCollection[] = [];
  public chromecastDashboards: ChromecastDashboard[] = [];

  @Mutation
  private SET_CHROMECAST_DASHBOARDS(
    chromecastDashboards: ChromecastDashboard[]
  ) {
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
  private SET_DASHBOARD_COLLECTIONS(dashboards: DashboardCollection[]) {
    dashboards.forEach((dashboard: DashboardCollection) =>
      this.dashboardCollections.push(new DashboardCollection(dashboard))
    );
    this.dashboardCollections = dashboards;
  }

  @Mutation
  private ADD_DASHBOARD_COLLECTION(dashboard: DashboardCollection) {
    this.dashboardCollections.push(new DashboardCollection(dashboard));
  }

  @Mutation
  private REMOVE_DASHBOARD_COLLECTION(dashboard: DashboardCollection) {
    this.dashboardCollections = this.dashboardCollections.filter(
      (dashboardCollection: DashboardCollection) =>
        dashboard.getId() != dashboardCollection.getId()
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
        dashboard.getId() != chromecastDashboard.getId()
    );
  }

  /*
  @Mutation
  private TOGGLE_IS_EDITING(dashboard: ChromecastDashboard) {
    dashboard.setIsEditing(!dashboard.getIsEditing);
  }
  */

  @Action
  public async addChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.postChromecastDashboard(dashboard);
    this.ADD_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public async removeChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.deleteChromecastDashboard(dashboard.getId());
    this.REMOVE_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public async updateChromeCastDashboard(dashboard: ChromecastDashboard) {
    await DashboardService.putChromecastDashboard(dashboard);
    this.REMOVE_CHROMECAST_DASHBOARD(dashboard);
    this.ADD_CHROMECAST_DASHBOARD(dashboard);
  }

  @Action
  public async addDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.postDashboardCollection(dashboard);
    this.ADD_DASHBOARD_COLLECTION(dashboard);
  }

  @Action
  public async removeDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.deleteDashboardCollection(dashboard.getId());

    this.REMOVE_DASHBOARD_COLLECTION(dashboard);
    this.ADD_DASHBOARD_COLLECTION(dashboard);
  }

  @Action
  public async updateDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.putDashboardCollection(dashboard);
    this.loadDashboardCollections();
  }

  /*
  @Action
  public toggleIsEditing(chromecastDashboard: ChromecastDashboard) {
    this.TOGGLE_IS_EDITING(chromecastDashboard);
  }
  */

  @Action
  public async loadDashboardCollections() {
    const {
      data
    }: AxiosResponse<DashboardCollection[]> = await DashboardService.getDashboardCollections();
    if (data != undefined) this.SET_DASHBOARD_COLLECTIONS(data);
  }

  @Action
  public async loadChromecastDashboards() {
    const {
      data
    }: AxiosResponse<ChromecastDashboard[]> = await DashboardService.getChromecastDashboards();

    if (data != undefined) this.SET_CHROMECAST_DASHBOARDS(data);
  }
}

export default getModule(DashboardCollectionsModule);
