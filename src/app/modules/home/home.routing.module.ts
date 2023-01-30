import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";

const Routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

export const homeRoutes = RouterModule.forChild(Routes);
