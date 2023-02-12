export interface ISecrets {
  API_TOKEN_GITHUB: string
}

export const secretsFactory = (): ISecrets => {
  // some actions to retrieve secrets
  return ({
    API_TOKEN_GITHUB: 'your_github_api_token',
  })
}