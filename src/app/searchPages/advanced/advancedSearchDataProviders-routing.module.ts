import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireAdvancedSearchDataProvidersComponent} from './advancedSearchDataProviders.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireAdvancedSearchDataProvidersComponent, data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class AdvancedSearchDataProvidersRoutingModule { }
