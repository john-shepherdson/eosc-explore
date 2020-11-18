import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireAdvancedSearchOrganizationsComponent} from './advancedSearchOrganizations.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchOrganizationsComponent ,  data: {
          redirect: '/error'
        },canDeactivate: [PreviousRouteRecorder]}

    ])
  ]
})
export class AdvancedSearchOrganizationsRoutingModule { }
