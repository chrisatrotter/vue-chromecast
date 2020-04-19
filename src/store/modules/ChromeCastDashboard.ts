import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from 'vuex-module-decorators';
import Store from '../index';
import { uid } from 'quasar';
import { ChromeCastDashboard } from '../models';

@Module({
  dynamic: true,
  name: 'chromeCastDashboard',
  namespaced: true,
  store: Store
})
class ChromeCastDashboardModule extends VuexModule
  implements ChromeCastDashboard {
  public id: string = '';
  public name: string = '';
  public show: boolean = false;
  public interval: number = 0;
  public intervalOptions: number[] = [];
  public url: string = '';
  public licenseurl: string = '';
  public drm: string = '';
  public drmOptions: string[] = [];
  public isEditing: boolean = false;

  @Mutation
  private SET_ID() {
    this.id = uid();
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_SHOW(show: boolean) {
    this.show = show;
  }

  @Mutation
  private SET_INTERVAL(interval: number) {
    this.interval = interval;
  }
  @Mutation
  private SET_INTERVAL_OPTIONS(intervalOptions: number[]) {
    this.intervalOptions = intervalOptions;
  }

  @Mutation
  private SET_URL(url: string) {
    this.url = url;
  }

  @Mutation
  private SET_LICENSEURL(licenseurl: string) {
    this.licenseurl = licenseurl;
  }

  @Mutation
  private SET_DRM(drm: string) {
    this.drm = drm;
  }

  @Mutation
  private SET_DRM_OPTIONS(drmOptions: string[]) {
    this.drmOptions = drmOptions;
  }

  @Mutation
  private SET_IS_EDITING(isEditing: boolean) {
    this.isEditing = isEditing;
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
  public setShow(value: boolean) {
    this.SET_SHOW(value);
  }

  @Action
  public toggleShow() {
    this.SET_SHOW(!this.show);
  }

  @Action
  public setInterval(value: number) {
    this.SET_INTERVAL(value);
  }

  @Action
  public setIntervalOptions(value: number[]) {
    this.SET_INTERVAL_OPTIONS(value);
  }

  @Action
  public setUrl(value: string) {
    this.SET_URL(value);
  }

  @Action
  public setLicenseUrl(value: string) {
    this.SET_LICENSEURL(value);
  }

  @Action
  public setDRM(value: string) {
    this.SET_DRM(value);
  }

  @Action
  public setDRMOptions(value: string[]) {
    this.SET_DRM_OPTIONS(value);
  }

  @Action
  public setIsEditing(value: boolean) {
    this.SET_IS_EDITING(value);
  }

  @Action
  public toggleEditing() {
    this.SET_IS_EDITING(!this.isEditing);
  }
}

export default getModule(ChromeCastDashboardModule);
