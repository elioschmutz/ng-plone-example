import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { ViewView } from '@plone/restapi-angular';

import { Traverser } from 'angular-traversal';
import { Observable } from 'rxjs/Observable';

import { AdvancedPloneViews } from './traversal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private views:AdvancedPloneViews,
    private traverser: Traverser,
  ) {
    this.views.initialize();
  }
}



