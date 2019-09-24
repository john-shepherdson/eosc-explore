import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireAdvancedSearchPublicationsComponent} from './advancedSearchPublications.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchPublicationsComponent, canActivate: [FreeGuard], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchPublicationsRoutingModule { }
