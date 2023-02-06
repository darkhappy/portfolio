import { Component } from '@angular/core';
import {faAngular, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faDotCircle, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Icons
  iconAngular = faAngular;
  iconHeart = faHeart;
  iconGithub = faGithub;
}
