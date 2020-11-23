import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireDepositComponent} from './deposit.component';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireDepositComponent, data: {
          redirect: '/error'
        }, canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class DepositRoutingModule { }
