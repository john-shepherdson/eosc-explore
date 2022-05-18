import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireAdvancedSearchOrganizationsComponent} from './advancedSearchOrganizations.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchOrganizationsComponent ,  data: {
          redirect: properties.errorLink
        },canDeactivate: [PreviousRouteRecorder]}

    ])
  ]
})
export class AdvancedSearchOrganizationsRoutingModule { }
