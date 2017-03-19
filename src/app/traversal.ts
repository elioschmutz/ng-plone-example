import { Injectable } from '@angular/core';
import { Traverser } from 'angular-traversal';
import { ViewView } from '@plone/restapi-angular';
import { DocumentView } from './views/document.component';
import { PloneSiteViewComponent } from './views/plone-site.component';
import { RepositoryViewComponent } from './views/repository.component';


@Injectable()
export class AdvancedPloneViews {

    constructor(private traverser: Traverser) {}

    initialize() {
        this.traverser.addView('view', 'Document', DocumentView);
        this.traverser.addView('view', 'Plone Site', PloneSiteViewComponent);
        this.traverser.addView('view', 'opengever.repository.repositoryroot', RepositoryViewComponent);
        this.traverser.addView('view', 'opengever.repository.repositoryfolder', RepositoryViewComponent);
        this.traverser.addView('view', 'opengever.dossier.businesscasedossier', RepositoryViewComponent);
        this.traverser.addView('view', 'opengever.document.document', DocumentView);

        this.traverser.addView('view', '*', RepositoryViewComponent);
    }
}
