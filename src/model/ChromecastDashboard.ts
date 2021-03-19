import { uid } from 'quasar';

/*change back all public variables to private again later*/
export default class ChromecastDashboard {
  public id: string;
  public name: string;
  public dashboardCollectionId: string;
  public show: boolean;
  public interval: number;
  public url: string;
  public licenseurl: string;
  public drm: string;
  public isEditing: boolean;

  public constructor(
    dashboardCollectionId: string,
    chromecastDashboard?: ChromecastDashboard
  ) {
    chromecastDashboard
      ? this.setChromecastDashboard(chromecastDashboard, dashboardCollectionId)
      : this.setDefault(dashboardCollectionId);
  }

  private setDefault(dashboardCollectionId: string) {
    this.id = uid();
    this.dashboardCollectionId = dashboardCollectionId;
    this.name = '';
    this.show = false;
    this.interval = 120;
    this.url = '';
    this.licenseurl = '';
    this.drm = '';
    this.isEditing = false;
  }

  private setChromecastDashboard(
    chromecastDashboard: ChromecastDashboard,
    dashboardCollectionId: string
  ) {
    this.id = chromecastDashboard.id;
    this.dashboardCollectionId = dashboardCollectionId;
    this.name = chromecastDashboard.name;
    this.show = chromecastDashboard.show;
    this.interval = chromecastDashboard.interval;
    this.url = chromecastDashboard.url;
    this.licenseurl = chromecastDashboard.licenseurl;
    this.drm = chromecastDashboard.drm;
    this.isEditing = chromecastDashboard.isEditing || false;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getDashboardCollectionId(): string {
    return this.dashboardCollectionId;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getShow(): boolean {
    return this.show;
  }

  public setShow(show: boolean) {
    this.show = show;
  }

  public getInterval(): number {
    return this.interval;
  }

  public setInterval(interval: number) {
    this.interval = interval;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public getLicenseurl(): string {
    return this.licenseurl;
  }

  public setLicenseurl(licenseurl: string) {
    this.licenseurl = licenseurl;
  }

  public getDrm(): string {
    return this.drm;
  }

  public setDrm(drm: string) {
    this.drm = drm;
  }

  public getIsEditing(): boolean {
    return this.isEditing;
  }

  public setIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
}
