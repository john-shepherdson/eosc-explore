import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchCompatibleDataprovidersTableComponent} from './compatibleDataProvidersTable.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchCompatibleDataprovidersTableComponent, canActivate: [FreeGuard, IsRouteEnabled], data: {
          redirect: '/error',  community : 'openaire'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class CompatibleDataProvidersTableRoutingModule { }
