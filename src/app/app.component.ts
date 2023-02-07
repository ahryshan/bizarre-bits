import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, HeaderComponent, RouterOutlet],
  standalone: true
})
export class AppComponent {
  title = 'BizarreBits';
}
