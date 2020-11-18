import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireAdvancedSearchProjectsComponent} from './advancedSearchProjects.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchProjectsComponent, data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchProjectsRoutingModule { }
