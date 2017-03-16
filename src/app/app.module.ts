import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RESTAPIModule, CONFIGURATION } from '@plone/restapi-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
