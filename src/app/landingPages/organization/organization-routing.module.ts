import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireOrganizationComponent} from './organization.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
 imports: [
  RouterModule.forChild([
    { path: '', component: OpenaireOrganizationComponent, canActivate: [FreeGuard], data: {
        redirect: properties.errorLink
      },canDeactivate: [PreviousRouteRecorder] }
  ])
]
})
export class OrganizationRoutingModule { }
