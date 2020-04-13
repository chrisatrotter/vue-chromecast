import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import { uid } from 'quasar';
import { IDashboard, IChromeCastDashboard } from '../models';

@Module({
  dynamic: true,
  name: 'dashboard',
  namespaced: true,
  store: Store
})
class DashboardModule extends VuexModule implements IDashboard {
  public id: string = '';
  public name: string = '';
  public display: boolean = false;
  public dashboard: IChromeCastDashboard[] = [];

  @Mutation
  private SET_ID() {
    this.id = uid();
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_DISPLAY(display: boolean) {
    this.display = display;
  }

  @Mutation
  public ADD_DASHBOARD(dashboard: IChromeCastDashboard) {
    this.dashboard.push(dashboard);
  }

  @Mutation
  private REMOVE_DASHBOARD(dashboard: IChromeCastDashboard) {
    this.dashboard = this.dashboard.filter(
      (value: IChromeCastDashboard) => value.id != dashboard.id
    );
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
    this.SET_DISPLAY(!this.display);
  }

  @Action
  public getChromeCastDashboardInformation() {}

  @Action
  public addDashboard(dashboard: IChromeCastDashboard) {
    this.ADD_DASHBOARD(dashboard);
  }

  @Action
  public removeDashboard(dashboard: IChromeCastDashboard) {
    this.REMOVE_DASHBOARD(dashboard);
  }
}

export default getModule(DashboardModule);
