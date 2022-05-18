import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireDepositComponent} from './deposit.component';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from "../openaireLibrary/error/isRouteEnabled.guard";
import {properties} from "../../environments/environment";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireDepositComponent, data: {
          redirect: properties.errorLink
        }, canDeactivate: [PreviousRouteRecorder], canActivate: [IsRouteEnabled] }

    ])
  ]
})
export class DepositRoutingModule { }
