import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchPublicationsComponent} from './searchPublications.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchPublicationsComponent, canActivate: [FreeGuard], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchPublicationsRoutingModule { }
