import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RESTAPIModule, CONFIGURATION, AuthenticationService } from '@plone/restapi-angular';
import { DebugBarComponent } from './debug-bar.component';
import { AdvancedPloneViews } from './traversal';
import { DocumentView } from './views/document.component';
import { TypeMarker } from './type-marker';
import { Marker } from 'angular-traversal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugBarComponent,
    DocumentView
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
        BACKEND_URL: 'http://localhost:8080/Plone',
      }
    },
    AuthenticationService,
    { provide: Marker, useClass: TypeMarker },
  ],
  entryComponents: [
    DocumentView,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
