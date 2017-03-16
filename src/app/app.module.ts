import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RESTAPIModule, CONFIGURATION, AuthenticationService } from '@plone/restapi-angular';
import { DebugBarComponent } from './debug-bar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RESTAPIModule,
  ],
  providers: [
    {
      provide: CONFIGURATION, useValue: {
        BACKEND_URL: 'http://localhost:8080/Plone',
      }
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
