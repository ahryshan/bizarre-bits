import {Component, Inject} from '@angular/core'
import { CommonModule } from '@angular/common';
import {APP_CONFIG, AppConfig} from '~models/global-injection-tokens'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(@Inject(APP_CONFIG) public appConfig: AppConfig) {
  }

}
