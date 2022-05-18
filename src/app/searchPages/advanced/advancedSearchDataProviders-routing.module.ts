import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireAdvancedSearchDataProvidersComponent} from './advancedSearchDataProviders.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {properties} from "../../../environments/environment";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchDataProvidersComponent, data: {
          redirect: properties.errorLink
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchDataProvidersRoutingModule { }
