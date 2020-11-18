import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireSearchOrganizationsComponent} from './searchOrganizations.component';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchOrganizationsComponent, data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class SearchOrganizationsRoutingModule { }
