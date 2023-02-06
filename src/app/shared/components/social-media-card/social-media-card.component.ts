import {Component, Input} from '@angular/core';
import {Social} from "@data/schemas/social";
import {faShare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-social-media-card',
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.scss']
})
export class SocialMediaCardComponent {
  @Input() social: Social = {
    id: 0,
    name: '',
    url: '',
    icon: undefined
  }

  iconDefault = faShare;
}
