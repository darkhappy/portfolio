import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {homeRoutes} from "./home.routing.module";
import {SharedModule} from "@shared/shared.module";
import {NgForOf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProjectComponent } from './pages/project/project.component';


@NgModule({
  declarations: [HomeComponent, ProjectComponent],
  imports: [homeRoutes, SharedModule, NgForOf, FontAwesomeModule]
})
export class HomeModule {
}
