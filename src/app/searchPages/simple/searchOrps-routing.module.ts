import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchOrpsComponent} from './searchOrps.component';
import { EnvironmentSpecificResolver} from '../../openaireLibrary/utils/properties/environmentSpecificResolver';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'



@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchOrpsComponent, canActivate: [FreeGuard, IsRouteEnabled], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] , resolve: { envSpecific: EnvironmentSpecificResolver  }},

    ])
  ]
})
export class SearchOrpsRoutingModule { }
