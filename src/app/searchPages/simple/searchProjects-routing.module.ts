import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchProjectsComponent} from './searchProjects.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchProjectsComponent, canActivate: [FreeGuard, IsRouteEnabled], data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchProjectsRoutingModule { }
