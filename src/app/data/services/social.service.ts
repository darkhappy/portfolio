import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Social} from "../schemas/social";
import {faDiscord, faGithub, faKeybase, faReddit} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMailForward, faMailReply} from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() {
  }

  getSocials(): Observable<Social[]> {
    return of([
      {
        id: 0,
        name: 'Email',
        url: 'mailto:me@darkh.app',
        icon: faEnvelope,
      },
      {
        id: 1,
        name: 'GitHub',
        url: 'https://github.com/darkhappy',
        icon: faGithub
      },
      {
        id: 2,
        name: 'Discord',
        url: 'https://discords.com/bio/p/darkhappy/',
        icon: faDiscord,
      },
      {
        id: 3,
        name: 'Reddit',
        url: 'https://reddit.com/u/DarkHappy',
        icon: faReddit
      },
      {
        id: 4,
        name: 'Keybase',
        url: 'https://keybase.io/darkhappy',
        icon: faKeybase
      },
    ]);
  }
}
