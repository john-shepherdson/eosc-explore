import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OpenaireClaimsByTokenComponent } from './claimsByToken.component';
import {ClaimsByTokenModule} from '../../openaireLibrary/claims/claimsByToken/claimsByToken.module';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { ClaimsByTokenRoutingModule } from './claimsByToken-routing.module';



@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    ClaimsByTokenModule,
    ClaimsByTokenRoutingModule
  ],
  providers:[
        LoginGuard, PreviousRouteRecorder, IsRouteEnabled
  ],
  declarations: [
    OpenaireClaimsByTokenComponent
  ],
  exports: [
      OpenaireClaimsByTokenComponent
    ]
})
export class LibClaimsByTokenModule { }
