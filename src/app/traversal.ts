import { Injectable } from '@angular/core';
import { Traverser } from 'angular-traversal';
import { ViewView } from '@plone/restapi-angular';
import { DocumentView } from './views/document.component';


@Injectable()
export class AdvancedPloneViews {

    constructor(private traverser: Traverser) {}

    initialize() {
        this.traverser.addView('view', 'Document', DocumentView);
        this.traverser.addView('view', '*', ViewView);
    }
}
