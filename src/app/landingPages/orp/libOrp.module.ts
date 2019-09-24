import {NgModule} from '@angular/core';
import {ResultLandingModule} from "../../openaireLibrary/landingPages/result/resultLanding.module";
import {OpenaireOrpComponent} from './orp.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OrpRoutingModule} from './orp-routing.module';

@NgModule({
  imports: [ResultLandingModule, OrpRoutingModule],
  declarations:[OpenaireOrpComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireOrpComponent]
})
export class LibOrpModule { }
