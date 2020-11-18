import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchResearchResultsComponent} from './searchResearchResults.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchResearchResultsComponent, data: {
          redirect: '/error',  community : 'openaire'
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchResearchResultsRoutingModule { }
