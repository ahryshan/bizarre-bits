import {InjectionToken} from '@angular/core'

export interface AppConfig {
  PRODUCTION: boolean
  APP_TITLE: string
  GITHUB_API_TOKEN: string
  APP_VERSION: string
  APP_NAME: string
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config')