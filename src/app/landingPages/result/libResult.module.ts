import {NgModule} from '@angular/core';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenaireResultComponent} from './result.component';
import {ResultRoutingModule} from './result-routing.module';
import {ResultLandingModule} from "../../openaireLibrary/landingPages/result/resultLanding.module";

@NgModule({
  imports: [ResultRoutingModule, ResultLandingModule],
  declarations:[OpenaireResultComponent],
  providers:[PreviousRouteRecorder],
  exports:[OpenaireResultComponent]
})
export class LibResultModule { }
