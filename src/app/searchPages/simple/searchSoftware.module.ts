import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchSoftwareRoutingModule} from './searchSoftware-routing.module';
import {OpenaireSearchSoftwareComponent} from './searchSoftware.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchResearchResultsModule} from "../../openaireLibrary/searchPages/simple/searchResearchResults.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchResearchResultsModule, SearchSoftwareRoutingModule
  ],
  declarations: [
    OpenaireSearchSoftwareComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder
    ],
  exports: [
    OpenaireSearchSoftwareComponent
     ]
})
export class LibSearchSoftwareModule { }
