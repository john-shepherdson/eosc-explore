import {NgModule} from '@angular/core';
import {ResultLandingModule} from "../../openaireLibrary/landingPages/result/resultLanding.module";

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenaireSoftwareComponent} from './software.component';
import {SoftwareRoutingModule} from './software-routing.module';

@NgModule({
  imports: [ResultLandingModule, SoftwareRoutingModule],
  declarations:[OpenaireSoftwareComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireSoftwareComponent]
})
export class LibSoftwareModule { }
