import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import {OpenaireLinkingComponent} from './linkingGeneric.component';
import {LinkingRoutingModule} from './linking-routing.module';
import{   LinkingGenericModule} from '../../openaireLibrary/claims/linking/linkingGeneric.module';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

@NgModule({
  imports: [
    SharedModule, LinkingRoutingModule, LinkingGenericModule
  ],
  providers:[LoginGuard, PreviousRouteRecorder, IsRouteEnabled],
  declarations: [
    OpenaireLinkingComponent
   ], exports:[
   OpenaireLinkingComponent ]
})
export class LibLinkingGenericModule { }
