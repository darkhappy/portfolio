import {Component} from '@angular/core';
import {Social} from "@data/schemas/social";
import {Observable} from "rxjs";
import {SocialService} from "@data/services/social.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ts-ignore
  socialMedia: Social[];

  constructor(private socialService: SocialService) {
  }

  ngOnInit(): void {
    this.socialService.getSocials().subscribe(socials => {
      this.socialMedia = socials;
    });
  }

  scrollDown() {
    document.getElementById('content')?.scrollIntoView({behavior: 'smooth'});
  }
}
