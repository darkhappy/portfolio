import {Component} from '@angular/core';
import {Social} from "@data/schemas/social";
import {Observable} from "rxjs";
import {SocialService} from "@data/services/social.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ts-ignore
  socialMedia: Social[];

  constructor(private socialService: SocialService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.socialService.getSocials().subscribe(socials => {
      this.socialMedia = socials;
    });
  }

  scrollDown() {
    document.getElementById('content')?.scrollIntoView({behavior: 'smooth'});
  }

  gotoProjects() {
    this.router.navigateByUrl('/project');
  }
}
