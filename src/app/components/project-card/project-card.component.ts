import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RepoInfoComponent} from '~components/repo-info/repo-info.component'

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RepoInfoComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

}
