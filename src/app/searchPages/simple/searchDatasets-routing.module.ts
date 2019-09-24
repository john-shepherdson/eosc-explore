import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchDatasetsComponent} from './searchDatasets.component';
import {EnvironmentSpecificResolver} from '../../openaireLibrary/utils/properties/environmentSpecificResolver';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchDatasetsComponent, canActivate: [FreeGuard], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] , resolve: { envSpecific: EnvironmentSpecificResolver  }},

    ])
  ]
})
export class SearchDatasetsRoutingModule { }
