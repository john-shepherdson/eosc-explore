import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireMyClaimsComponent} from './myClaims.component';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from "../../openaireLibrary/error/isRouteEnabled.guard";


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireMyClaimsComponent, canActivate: [IsRouteEnabled, LoginGuard],
      data: {redirect: '/error',  community : 'openaire'}, canDeactivate: [PreviousRouteRecorder]}])
  ]
})
export class MyClaimsRoutingModule { }
