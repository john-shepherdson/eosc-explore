import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {OpenaireResultComponent } from './result.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
 imports: [
  RouterModule.forChild([
    { path: '', component: OpenaireResultComponent,  data: {
        redirect: properties.errorLink,  community : 'openaire'
      },canDeactivate: [PreviousRouteRecorder]  }
  ])
]
})
export class ResultRoutingModule { }
