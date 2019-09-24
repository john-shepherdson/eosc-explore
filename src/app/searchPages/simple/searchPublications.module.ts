import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchPublicationsRoutingModule} from './searchPublications-routing.module';
import {OpenaireSearchPublicationsComponent} from './searchPublications.component';

import {SearchResearchResultsModule} from "../../openaireLibrary/searchPages/simple/searchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchResearchResultsModule,

      SearchPublicationsRoutingModule

  ],
  declarations: [
    OpenaireSearchPublicationsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder],
  exports: [
    OpenaireSearchPublicationsComponent
     ]
})
export class LibSearchPublicationsModule { }
