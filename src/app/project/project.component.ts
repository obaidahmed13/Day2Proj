import { Component } from '@angular/core';
import { ProjectService } from '../project-list.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects;
  constructor(srv: ProjectService) {
    this.projects = srv.getProjects();
  }
}
