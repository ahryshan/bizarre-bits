import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class AppComponent {
  title = 'BizarreBits';
}
