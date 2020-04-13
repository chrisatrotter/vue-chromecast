import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';

@Module({
  dynamic: true,
  name: 'layout',
  namespaced: true,
  store: Store
})
class Layout extends VuexModule {
  public rightDrawerOpen = false;

  @Mutation
  private SET_RIGHT_DRAWER_OPEN(value: boolean) {
    this.rightDrawerOpen = value;
  }

  @Action
  public setRightDrawerOpen(value: boolean) {
    this.SET_RIGHT_DRAWER_OPEN(value);
  }

  @Action
  public toggleRightDrawer() {
    this.SET_RIGHT_DRAWER_OPEN(!this.rightDrawerOpen);
  }
}

export const LayoutModule = getModule(Layout);
