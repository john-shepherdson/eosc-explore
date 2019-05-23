//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PublicationModule } from '../../openaireLibrary/landingPages/publication/publication.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { OpenairePublicationComponent } from './publication.component';
import {PublicationRoutingModule} from './publication-routing.module';

@NgModule({
  imports: [PublicationModule, PublicationRoutingModule],
  declarations:[OpenairePublicationComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenairePublicationComponent]
})
export class LibPublicationModule { }
