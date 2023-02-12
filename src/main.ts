import {bootstrapApplication} from '@angular/platform-browser'
import {AppComponent} from './app/app.component'
import {provideRouter} from '@angular/router'
import {APP_ROUTES} from './app/app.routes'
import {provideHttpClient} from '@angular/common/http'
import {APP_CONFIG, IAppConfig} from '~models/global-injection-tokens'
import {environment} from '~environment'
import packageJson from '../package.json'

const appConfig: IAppConfig = {
  GITHUB_API_TOKEN: environment.GITHUB_API_TOKEN,
  APP_TITLE: environment.APP_TITLE,
  PRODUCTION: environment.PRODUCTION,
  APP_VERSION: packageJson.version,
  PACKAGE_NAME: packageJson.name,
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter([...APP_ROUTES]), provideHttpClient(), {
    provide: APP_CONFIG,
    useValue: appConfig,
  }],
})
