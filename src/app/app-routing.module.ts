import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './views/map/map.component';
import { HelpComponent } from './views/help/help.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ListComponent } from './views/list/list.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NewEventButtonComponent } from './models/events/buttons/new-event/button-new-event.component';
import { AuthComponent } from './auth/auth.component';
import { MapModuleComponent } from './models/map-module/map-module.component';
import { AuthButtonComponent } from './auth0/authbutton.component';
import { AuthGuard } from '@auth0/auth0-angular';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'list',
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-event',
    component: NewEventButtonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: AuthButtonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
