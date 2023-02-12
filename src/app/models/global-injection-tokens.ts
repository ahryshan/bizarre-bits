import {InjectionToken} from '@angular/core'

export interface IAppConfig {
  PRODUCTION: boolean,
  APP_TITLE: string
  GITHUB_API_TOKEN: string,
  APP_VERSION: string,
  PACKAGE_NAME: string
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config')