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
import DashboardCollection from 'src/model/DashboardCollection';

@Module({
  dynamic: true,
  name: 'dashboardCollections',
  namespaced: true,
  store: Store
})
class DashboardCollectionModule extends VuexModule {
  public dashboardCollections: DashboardCollection[] = [];

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
        dashboard.id != dashboardCollection.id
    );
  }

  @Action
  public async addDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.postDashboardCollection(dashboard);
    this.ADD_DASHBOARD_COLLECTION(dashboard);
  }

  @Action
  public async removeDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.deleteDashboardCollection(dashboard.id);
    this.REMOVE_DASHBOARD_COLLECTION(dashboard);
  }

  @Action
  public async updateDashboardCollection(dashboard: DashboardCollection) {
    await DashboardService.putDashboardCollection(dashboard);
    this.loadDashboardCollections();
  }

  @Action
  public async loadDashboardCollections() {
    const {
      data
    }: AxiosResponse<DashboardCollection[]> = await DashboardService.getDashboardCollections();
    if (data != undefined) this.SET_DASHBOARD_COLLECTIONS(data);
  }
}

export default getModule(DashboardCollectionModule);
