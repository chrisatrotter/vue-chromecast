import { uid } from 'quasar';

export default class DashboardCollection {
  public id: string;
  public name: string;
  public display: boolean;
  public chromecastDashboards: string[];

  public constructor(dashboard?: DashboardCollection) {
    dashboard ? this.setDashboardCollection(dashboard) : this.setDefault();
  }

  private setDefault() {
    this.id = uid();
    this.name = 'A dashboard';
    this.display = false;
    this.chromecastDashboards = [];
  }

  private setDashboardCollection(dashboard: DashboardCollection) {
    this.id = dashboard.id;
    this.name = dashboard.name;
    this.display = dashboard.display;
    this.chromecastDashboards = dashboard.chromecastDashboards;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDisplay(): boolean {
    return this.display;
  }

  public getChromecastDashboard() {
    return this.chromecastDashboards;
  }

  public addChromecastDashboard(dashboard: string) {
    this.chromecastDashboards.push(dashboard);
  }

  public removeChromecastDashboard(dashboard: string) {
    this.chromecastDashboards = this.chromecastDashboards.filter(
      (chromedashboard: string) => dashboard != chromedashboard
    );
  }
}
