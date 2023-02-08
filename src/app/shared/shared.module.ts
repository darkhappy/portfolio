import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaCardComponent } from './components/social-media-card/social-media-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProjectCardComponent } from './components/project-card/project-card.component';



@NgModule({
  declarations: [
    SocialMediaCardComponent,
    ProjectCardComponent
  ],
  exports: [
    SocialMediaCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
