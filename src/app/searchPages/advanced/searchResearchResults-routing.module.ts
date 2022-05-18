import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchResearchResultsComponent} from './searchResearchResults.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchResearchResultsComponent, data: {
          redirect: properties.errorLink,  community : 'openaire'
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchResearchResultsRoutingModule { }
