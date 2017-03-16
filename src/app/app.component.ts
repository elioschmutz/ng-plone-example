import { Component } from '@angular/core';
import { Traverser } from 'angular-traversal';
import { PloneViews } from '@plone/restapi-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private views:PloneViews,
    private traverser: Traverser,
  ) {
    this.views.initialize();
  }
}
