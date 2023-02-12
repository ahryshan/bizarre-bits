import {IGithubRepoOwner} from '~models/github-user.model'

export interface IGithubRepo {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: IGithubRepoOwner
  private: boolean
  html_url: string
  description: string
  created_at: Date
  language: string
}
