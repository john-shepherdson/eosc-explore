import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OpenaireClaimsByTokenComponent} from './claimsByToken.component';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireClaimsByTokenComponent, canActivate: [LoginGuard],
      data: {redirect: '/error',  community : 'openaire'}, canDeactivate: [PreviousRouteRecorder]}])
  ]
})
export class ClaimsByTokenRoutingModule { }
