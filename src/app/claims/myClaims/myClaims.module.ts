import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { OpenaireMyClaimsComponent } from './myClaims.component';
import { MyClaimsRoutingModule } from './myClaims-routing.module';
import{  MyClaimsModule} from '../../openaireLibrary/claims/myClaims/myClaims.module';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';


@NgModule({
  imports: [
    SharedModule,
    MyClaimsRoutingModule,
    MyClaimsModule

  ],
  providers:[LoginGuard, PreviousRouteRecorder, IsRouteEnabled],
  declarations: [
    OpenaireMyClaimsComponent
  ]
})
export class LibMyClaimsModule { }
