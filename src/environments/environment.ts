import {secretsFactory} from './secrets'
import {IAppConfig} from '~models/global-injection-tokens'

const secrets = secretsFactory()
export const environment: IAppConfig = {
  PRODUCTION: true,
  APP_TITLE: 'Bizarre Bits',
  GITHUB_API_TOKEN: secrets.API_TOKEN_GITHUB
}
