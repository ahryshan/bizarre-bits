import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RepoInfoComponent} from '~components/repo-info/repo-info.component'
import {ProjectCardComponent} from '~components/project-card/project-card.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RepoInfoComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

}
