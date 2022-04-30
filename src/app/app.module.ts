import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'  
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';
import { MapComponent } from './views/map/map.component';
import { HelpComponent } from './views/help/help.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NewEventButtonComponent } from './models/events/buttons/new-event/button-new-event.component';
import { DialogBoxEditComponent } from './models/events/buttons/dialog-box-edit/dialog-box-edit.component';
import { DialogBoxDeleteComponent } from './models/events/buttons/dialog-box-delete/dialog-box-delete.component';
import { MapModuleComponent } from './models/map-module/map-module.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AuthButtonComponent } from './auth0/authbutton.component';

// Map-Module Services
import { PopupService } from './models/map-module/map-services/popup.service';
import { MarkerService } from './models/map-module/map-services/marker.service';
import { ShapeService } from './models/map-module/map-services/shape.service';

import { EventsComponent } from './models/events/events.component';
import { EventsApiService } from './models/events/events-api.service';
import { MapApiService } from './models/map-module/map-services/map-api.service';

// Authentication
import { AuthComponent } from './auth/auth.component';
import { AuthApiService } from './auth/auth-api.service';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './auth0/userprofile.component';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    ListComponent, 
    MapComponent, 
    HelpComponent,
    SettingsComponent, 
    NotFoundComponent,
    EventsComponent,
    NewEventButtonComponent,
    DialogBoxEditComponent,
    DialogBoxDeleteComponent,
    MapModuleComponent,
    AuthComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,    
    LeafletModule,
    MatSelectModule,
    MatCardModule,
    AuthModule.forRoot({
      domain: 'dev-l5guaxfx.eu.auth0.com',
      clientId: 'hnHVr1jzQP2jllzIFgWP7dTxQVoY0o8n',
      audience: 'https://code-project-zulu-backend.herokuapp.com/',
      // The AuthHttpInterceptor configuration
      httpInterceptor: {
        allowedList: [
          'https://code-project-zulu-backend.herokuapp.com/*',
          'https://code-project-zulu-backend.herokuapp.com/api/*',
          'https://code-project-zulu-backend.herokuapp.com/events/*',
          'https://code-project-zulu-backend.herokuapp.com/events',
          '/*'
        ]
      }
    }),
  ],
  providers: [
    EventsApiService,
    AuthApiService,
    MapApiService,
    MarkerService, 
    PopupService,
    ShapeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
