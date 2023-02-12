import {secretsFactory} from './secrets'

const secrets = secretsFactory()

export const environment = {
  PRODUCTION: false,
  GITHUB_API_TOKEN: secrets.API_TOKEN_GITHUB,
  APP_TITLE: 'Bizarre DEV'
};
