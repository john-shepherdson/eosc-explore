import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireAdvancedSearchDatasetsComponent} from './advancedSearchDatasets.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchDatasetsComponent, canActivate: [FreeGuard, IsRouteEnabled], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchDatasetsRoutingModule { }