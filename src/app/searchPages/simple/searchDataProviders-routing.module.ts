import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchDataprovidersComponent} from './searchDataproviders.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchDataprovidersComponent,data: {
          redirect: properties.errorLink
        }, canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchDataProvidersRoutingModule { }
