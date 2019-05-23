//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectModule } from '../../openaireLibrary/landingPages/project/project.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { OpenaireProjectComponent } from './project.component';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  imports: [ProjectModule, ProjectRoutingModule],
  declarations:[OpenaireProjectComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireProjectComponent]
})
export class LibProjectModule { }
