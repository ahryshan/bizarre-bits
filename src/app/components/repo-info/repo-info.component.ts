import {Component, Input, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {GithubService} from '~services/github/github.service'
import {IGithubRepo} from '~models/github-repo.model'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {delay, mergeMap} from 'rxjs'
import {ERepoLanguageLabel, IRepoLanguage, REPO_LANG_DICTIONARY} from '~models/repo-language.model'
import {Color, randomColor} from '~utils'

export interface IRepoLanguageChartItem extends IRepoLanguage {
  percentage: number
}

@Component({
  selector: 'app-repo-info',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepoInfoComponent implements OnInit {

  @Input()
  public repoFullName: string = ''
  public loadingStatus: { repoInfo: boolean, repoLangs: boolean } = {
    repoInfo: true, repoLangs: true,
  }

  public repository?: IGithubRepo
  public repoLanguages: IRepoLanguageChartItem[] = []
  public hoveredRepoLangIndex: number = -1

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getRepo(this.repoFullName).pipe(delay(2000),
      mergeMap(repo => {
        this.repository = repo
        this.loadingStatus.repoInfo = false;
        return this.githubService.getRepoLanguages(repo.full_name)
      }),
    )
      .subscribe((langs) => {
        this.loadingStatus.repoLangs = false;
        this.repoLanguages = []
        let total = 0
        for (let lang in langs) {
          total += langs[lang]
        }
        for (let lang in langs) {
          const dictionaryLang: IRepoLanguage | null = REPO_LANG_DICTIONARY[<ERepoLanguageLabel>lang] || null
          if (dictionaryLang)
            this.repoLanguages.push({...dictionaryLang, percentage: langs[lang] / total * 100})
          else
            this.repoLanguages.push({
              label: lang,
              color: randomColor(new Color('#2c2c2c'), new Color('#a8a8a8')),
              percentage: langs[lang] / total * 100,
            })
        }
        this.repoLanguages.sort((a, b) => b.percentage - a.percentage)
      })
  }

}
