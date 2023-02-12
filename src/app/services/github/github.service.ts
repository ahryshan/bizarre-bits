import {Inject, Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {IGithubRepo} from '~models/github-repo.model'
import {Observable} from 'rxjs'
import {APP_CONFIG, AppConfig} from '~models/global-injection-tokens'

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly API_REPOS_URL = 'https://api.github.com/repos'

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
  }

  public getRepo(repoFullName: string): Observable<IGithubRepo> {
    return this.http.get<IGithubRepo>(
      `${this.API_REPOS_URL}/${repoFullName}`,
      {
        headers: this.githubApiAuthorization(),
      },
    )
  }

  public getRepoLanguages(repoFullName: string): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>(
      `${this.API_REPOS_URL}/${repoFullName}/languages`,
      {
        headers: this.githubApiAuthorization(),
      },
    )
  }

  private githubApiAuthorization(headers?: HttpHeaders): HttpHeaders {
    if (headers)
      return headers.set('Authorization', `Bearer ${this.config.GITHUB_API_TOKEN}`)
    return new HttpHeaders().set('Authorization', `Bearer ${this.config.GITHUB_API_TOKEN}`)
  }

}
