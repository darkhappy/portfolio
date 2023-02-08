import {Component, Input} from '@angular/core';
import {Project} from "@data/schemas/project";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Project = {
    name: '',
    description: '',
    url: '',
    tags: []
  }

  iconGithub = faGithub;
}
