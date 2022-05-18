import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchServicesComponent} from './searchServices.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireSearchServicesComponent,data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchServicesRoutingModule { }
