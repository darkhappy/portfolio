import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ProjectComponent} from "@modules/home/pages/project/project.component";

const Routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  }
];

export const homeRoutes = RouterModule.forChild(Routes);
