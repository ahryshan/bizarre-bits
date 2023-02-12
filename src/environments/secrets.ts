import {ISecrets} from './secrets.sample'

export const secretsFactory = (): ISecrets => {
  return ({
    API_TOKEN_GITHUB: 'undefined'
  })
}