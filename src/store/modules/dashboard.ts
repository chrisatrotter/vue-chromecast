import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';

@Module({
  dynamic: true,
  name: 'dashboard',
  namespaced: true,
  store: Store
})
export default class DashboardStoreModule extends VuexModule {
  public editDashboard = false;

  @Mutation
  public SET_DASHBOARD_EDITING(value: boolean) {
    this.editDashboard = value;
  }

  @Action
  public SetDashboardEditing(value: boolean) {
    this.SET_DASHBOARD_EDITING(value);
  }

  @Action
  public toggleEditDashboard() {
    this.SET_DASHBOARD_EDITING(!this.editDashboard);
  }
}
