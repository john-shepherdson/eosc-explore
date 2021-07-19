import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireSearchDataprovidersToDepositComponent} from './searchDataprovidersToDeposit.component';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from "../openaireLibrary/error/isRouteEnabled.guard";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: OpenaireSearchDataprovidersToDepositComponent, data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder], canActivate: [IsRouteEnabled]
      }
    
    ])
  ]
})
export class SearchDataprovidersToDepositRoutingModule {
}