/*change back all public variables to private again later*/
export default class Chromecast {
  public namespace: string;
  public applicationId: string;
  public intervalOptions: number[];
  public licenseUrlOptions: string[];
  public drmOptions: string[];
  public connected: boolean;

  public constructor(chromecast?: Chromecast) {
    chromecast ? this.setChromecast(chromecast) : this.setDefault();
  }

  public setChromecast(chromecast: Chromecast) {
    this.namespace = 'urn:x-cast:com.github.chrisatrotter.vue-chromecast';
    this.applicationId = '94CDF042';
    this.intervalOptions = chromecast.intervalOptions;
    this.licenseUrlOptions = chromecast.licenseUrlOptions;
    this.drmOptions = chromecast.drmOptions;
    this.connected = false;
  }

  public setDefault() {
    this.namespace = 'urn:x-cast:com.github.chrisatrotter.vue-chromecast';
    this.applicationId = '94CDF042';
    this.intervalOptions = [30, 60, 90, 120];
    this.licenseUrlOptions = [];
    this.drmOptions = [];
    this.connected = false;
  }

  public isChrome() {
    return (
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    );
  }
  public setConnected(connected: boolean) {
    this.connected = connected;
  }

  public getConnected() {
    return this.connected;
  }

  public getIntervalOptions(): number[] {
    return this.intervalOptions;
  }

  public setIntervalOptions(intervalOptions: number[]) {
    this.intervalOptions = intervalOptions;
  }

  public addIntervalOption(intervalOption: number) {
    this.intervalOptions.push(intervalOption);
  }

  public removeIntervalOption(intervalOption: number) {
    this.intervalOptions = this.intervalOptions.filter(
      (interval: number) => intervalOption != interval
    );
  }

  public getLicenseUrlOptions(): string[] {
    return this.licenseUrlOptions;
  }

  public setLicenseUrlOptions(licenseUrlOptions: string[]) {
    this.licenseUrlOptions = licenseUrlOptions;
  }

  public addLicenseUrlOption(licenseUrlOption: string) {
    this.licenseUrlOptions.push(licenseUrlOption);
  }

  public removeLicenseUrlOption(licenseUrlOption: string) {
    this.licenseUrlOptions = this.licenseUrlOptions.filter(
      (licenseUrl: string) => licenseUrl != licenseUrlOption
    );
  }

  public getDrmOptions(): string[] {
    return this.drmOptions;
  }

  public setDrmOptions(drmOptions: string[]) {
    this.drmOptions = drmOptions;
  }

  public addDrmOption(drmOption: string) {
    this.drmOptions.push(drmOption);
  }

  public removeDrmOption(drmOption: string) {
    this.drmOptions = this.drmOptions.filter((drm: string) => drm != drmOption);
  }
}
