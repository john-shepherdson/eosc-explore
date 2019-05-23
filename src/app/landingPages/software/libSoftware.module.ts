//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SoftwareModule } from '../../openaireLibrary/landingPages/software/software.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { OpenaireSoftwareComponent } from './software.component';
import {SoftwareRoutingModule} from './software-routing.module';
@NgModule({
  imports: [SoftwareModule, SoftwareRoutingModule],
  declarations:[OpenaireSoftwareComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireSoftwareComponent]
})
export class LibSoftwareModule { }
