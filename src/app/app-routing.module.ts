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



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    component: AuthComponent
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'new-event',
    component: NewEventButtonComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
