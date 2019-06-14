import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchOrganizationsComponent} from './searchOrganizations.component';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'



@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchOrganizationsComponent, canActivate: [FreeGuard, IsRouteEnabled], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class SearchOrganizationsRoutingModule { }
