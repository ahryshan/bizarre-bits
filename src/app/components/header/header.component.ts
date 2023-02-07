import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isNarrowScreen = true;
  public showNavSlider = false;
  public readonly FA_BARS = faBars
  public readonly FA_XMARK = faXmark;

  @HostListener("window:resize", ['event'])
  onResize() {
    screen.width < 600 ? this.isNarrowScreen = true : this.isNarrowScreen = false;
  }

  constructor() {
    this.onResize();
  }
}
