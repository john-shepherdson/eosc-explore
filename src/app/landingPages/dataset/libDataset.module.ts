import { NgModule}            from '@angular/core';
import {ResultLandingModule} from "../../openaireLibrary/landingPages/result/resultLanding.module";
import { OpenaireDatasetComponent } from './dataset.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {DatasetRoutingModule} from './dataset-routing.module';
 @NgModule({
  imports: [ResultLandingModule, DatasetRoutingModule],
  declarations:[OpenaireDatasetComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireDatasetComponent]
})
export class LibDatasetModule { }
