import {NgModule} from '@angular/core';
import {ProjectModule} from '../../openaireLibrary/landingPages/project/project.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenaireProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  imports: [ProjectModule, ProjectRoutingModule],
  declarations:[OpenaireProjectComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireProjectComponent]
})
export class LibProjectModule { }
