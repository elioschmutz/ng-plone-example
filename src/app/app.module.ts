import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RESTAPIModule, CONFIGURATION, AuthenticationService } from '@plone/restapi-angular';
import { DebugBarComponent } from './debug-bar.component';
import { MainNaviComponent } from './main-navi.component';
import { AdvancedPloneViews } from './traversal';
import { DocumentView } from './views/document.component';
import { PloneSiteViewComponent } from './views/plone-site.component';
import { RepositoryViewComponent } from './views/repository.component';
import { TypeMarker } from './type-marker';
import { AppComponent } from './app.component';

import { Marker } from 'angular-traversal';

@NgModule({
  declarations: [
    AppComponent,
    DebugBarComponent,
    DocumentView,
    PloneSiteViewComponent,
    MainNaviComponent,
    RepositoryViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RESTAPIModule,
  ],
  providers: [
    AdvancedPloneViews,
    {
      provide: CONFIGURATION, useValue: {
        BACKEND_URL: 'http://localhost:8080/fd',
      }
    },
    { provide: Marker, useClass: TypeMarker },
  ],
  entryComponents: [
    DocumentView,
    PloneSiteViewComponent,
    RepositoryViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
