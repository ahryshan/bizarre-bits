export interface IGithubUser {
    login: string,
    avatar_url: URL,
    html_url: URL,
    type: EGithubUserType,
    name: string,
}

// I guess we should make this difference for the future
// because there is no guaranty that we won't need the data
// what IUser has, but not the RepoOwner
export interface IGithubRepoOwner {
    login: string,
    avatar_url: URL,
    html_url: URL,
    type: EGithubUserType,
    name: string,
}

export enum EGithubUserType {
    USER = 'User',
    ORGANIZATION = 'Organization'
}