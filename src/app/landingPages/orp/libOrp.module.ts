//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrpModule  } from '../../openaireLibrary/landingPages/orp/orp.module';
import { OpenaireOrpComponent } from './orp.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import {OrpRoutingModule} from './orp-routing.module';
 @NgModule({
  imports: [OrpModule, OrpRoutingModule],
  declarations:[OpenaireOrpComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireOrpComponent]
})
export class LibOrpModule { }
