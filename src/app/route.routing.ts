import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
];

export const RouteRoutes = RouterModule.forChild(routes);
