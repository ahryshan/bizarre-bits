import {Component, Inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from '~components/header/header.component'
import {RouterOutlet} from '@angular/router'
import {APP_CONFIG, AppConfig} from '~models/global-injection-tokens'
import {Title} from '@angular/platform-browser'
import {FooterComponent} from '~components/footer/footer.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
    standalone: true,
})
export class AppComponent {
    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, titleService: Title) {
        titleService.setTitle(appConfig.APP_TITLE)
    }
}
