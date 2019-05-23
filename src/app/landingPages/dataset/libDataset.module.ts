//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DatasetModule  } from '../../openaireLibrary/landingPages/dataset/dataset.module';
import { OpenaireDatasetComponent } from './dataset.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import {DatasetRoutingModule} from './dataset-routing.module';
 @NgModule({
  imports: [DatasetModule, DatasetRoutingModule],
  declarations:[OpenaireDatasetComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireDatasetComponent]
})
export class LibDatasetModule { }
