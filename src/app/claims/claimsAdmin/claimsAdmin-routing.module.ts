import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireClaimsAdminComponent} from './claimsAdmin.component';
import {ClaimsCuratorGuard} from '../../openaireLibrary/login/claimsCuratorGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireClaimsAdminComponent, canActivate: [ClaimsCuratorGuard],
      data: {redirect: '/error',  community : 'openaire'}, canDeactivate: [PreviousRouteRecorder]}])
  ]
})
export class ClaimsAdminRoutingModule { }
