import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchProjectsComponent} from './searchProjects.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchProjectsComponent, data: {
          redirect: properties.errorLink
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchProjectsRoutingModule { }
