import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchServicesComponent} from './searchServices.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireSearchServicesComponent,data: {
          redirect: properties.errorLink
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchServicesRoutingModule { }
