import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { OpenaireDirectLinkingComponent } from './directLinking.component';
import{ DirectLinkingModule} from '../../openaireLibrary/claims/directLinking/directLinking.module';
import {DirectLinkingRoutingModule} from './directLinking-routing.module';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

@NgModule({
  imports: [
    SharedModule, DirectLinkingModule, DirectLinkingRoutingModule
  ],
  providers:[LoginGuard, PreviousRouteRecorder, IsRouteEnabled],
  declarations: [
    OpenaireDirectLinkingComponent
  ], exports:[OpenaireDirectLinkingComponent]
})
export class LibDirectLinkingModule { }
