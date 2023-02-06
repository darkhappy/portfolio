import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaCardComponent } from './components/social-media-card/social-media-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    SocialMediaCardComponent
  ],
  exports: [
    SocialMediaCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
