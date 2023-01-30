import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {homeRoutes} from "./home.routing.module";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [homeRoutes, SharedModule]
})
export class HomeModule {
}
