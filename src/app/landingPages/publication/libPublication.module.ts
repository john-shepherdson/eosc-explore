import {NgModule} from '@angular/core';
import {ResultLandingModule} from "../../openaireLibrary/landingPages/result/resultLanding.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenairePublicationComponent} from './publication.component';
import {PublicationRoutingModule} from './publication-routing.module';

@NgModule({
  imports: [ResultLandingModule, PublicationRoutingModule],
  declarations:[OpenairePublicationComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenairePublicationComponent]
})
export class LibPublicationModule { }
