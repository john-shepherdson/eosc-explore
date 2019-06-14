import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireAdvancedSearchSoftwareComponent} from './advancedSearchSoftware.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchSoftwareComponent, canActivate: [FreeGuard],canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchSoftwareRoutingModule { }
