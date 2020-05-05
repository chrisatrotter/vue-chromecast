import { uid } from 'quasar';

/*change back all public variables to private again later*/
export default class ChromecastDashboard {
  public id: string;
  public name: string;
  public dashboardCollectionId: string;
  public show: boolean;
  public interval: number;
  public intervalOptions: number[];
  public url: string;
  public licenseurl: string;
  public drm: string;
  public drmOptions: string[];
  public isEditing: boolean;

  public constructor(
    dashboardCollectionId: string,
    chromecastDashboard?: ChromecastDashboard
  ) {
    chromecastDashboard
      ? this.setChromeDashboard(chromecastDashboard, dashboardCollectionId)
      : this.setDefault(dashboardCollectionId);
  }

  private setDefault(dashboardCollectionId: string) {
    this.id = uid();
    this.dashboardCollectionId = dashboardCollectionId;
    this.name = '';
    this.show = false;
    this.interval = 120;
    this.intervalOptions = [30, 60, 90, 120];
    this.url = '';
    this.licenseurl = '';
    this.drm = '';
    this.drmOptions = [];
    this.isEditing = false;
  }

  private setChromeDashboard(
    chromecastDashboard: ChromecastDashboard,
    dashboardCollectionId: string
  ) {
    this.id = chromecastDashboard.id;
    this.dashboardCollectionId = dashboardCollectionId;
    this.name = chromecastDashboard.name;
    this.show = chromecastDashboard.show;
    this.interval = chromecastDashboard.interval;
    this.intervalOptions = chromecastDashboard.intervalOptions || [
      30,
      60,
      90,
      120
    ];
    this.url = chromecastDashboard.url;
    this.licenseurl = chromecastDashboard.licenseurl;
    this.drm = chromecastDashboard.drm;
    this.drmOptions = chromecastDashboard.drmOptions;
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

  public getIntervalOptions(): number[] {
    return this.intervalOptions;
  }

  public addIntervalOptions(intervalOption: number) {
    this.intervalOptions.push(intervalOption);
  }

  public removeIntervalOptions(intervalOption: number) {
    this.intervalOptions = this.intervalOptions.filter(
      (interval: number) => intervalOption != interval
    );
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

  public getDrmOptions(): string[] {
    return this.drmOptions;
  }

  public getIsEditing(): boolean {
    return this.isEditing;
  }

  public setIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
}
