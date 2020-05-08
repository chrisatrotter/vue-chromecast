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
import Chromecast from 'src/model/Chromecast';

@Module({
  dynamic: true,
  name: 'chromecast',
  namespaced: true,
  store: Store
})
class ChromecastModule extends VuexModule {
  public chromecast: Chromecast = new Chromecast();

  @Mutation
  private SET_CHROMECAST(chromecast: Chromecast) {
    this.chromecast = chromecast;
  }

  @Action
  public async updateChromeCastDashboard(chromecast: Chromecast) {
    await DashboardService.putChromecast(chromecast);
    this.SET_CHROMECAST(chromecast);
  }

  @Action
  public async loadChromecast() {
    const {
      data
    }: AxiosResponse<Chromecast> = await DashboardService.getChromecast();

    if (data != undefined) this.SET_CHROMECAST(data);
  }
}

export default getModule(ChromecastModule);
