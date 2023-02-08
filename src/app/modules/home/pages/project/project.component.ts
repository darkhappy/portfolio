import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Project} from "@data/schemas/project";
import {ProjectService} from "@data/services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects: Project[] = []

  constructor(private router: Router, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  gotoHome() {
    this.router.navigateByUrl('/home').then(r => {
    });
  }

}
