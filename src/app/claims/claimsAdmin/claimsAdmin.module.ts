import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { OpenaireClaimsAdminComponent } from './claimsAdmin.component';
import { ClaimsAdminRoutingModule } from './claimsAdmin-routing.module';
import{ClaimsAdminModule } from '../../openaireLibrary/claims/claimsAdmin/claimsAdmin.module';
import{  ClaimsCuratorGuard} from '../../openaireLibrary/login/claimsCuratorGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';


@NgModule({
  imports: [
    SharedModule,
    ClaimsAdminRoutingModule,
    ClaimsAdminModule
  ],
    providers:[ClaimsCuratorGuard, PreviousRouteRecorder,IsRouteEnabled],
  declarations: [
    OpenaireClaimsAdminComponent
  ]
})
export class LibClaimsAdminModule { }
