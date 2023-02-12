import {secretsFactory} from './secrets'

const secrets = secretsFactory()
export const environment = {
  PRODUCTION: true,
  APP_TITLE: 'Bizarre Bits',
  GITHUB_API_TOKEN: secrets.API_TOKEN_GITHUB
}
