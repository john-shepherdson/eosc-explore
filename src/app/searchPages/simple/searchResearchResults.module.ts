import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchResearchResultsRoutingModule} from './searchResearchResults-routing.module';
import{OpenaireSearchResearchResultsComponent} from './searchResearchResults.component';

import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchResearchResultsModule} from "../../openaireLibrary/searchPages/searchResearchResults.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchResearchResultsRoutingModule, SearchResearchResultsModule

  ],
  declarations: [
    OpenaireSearchResearchResultsComponent
   ],
  providers:[PreviousRouteRecorder],
  exports: [
    OpenaireSearchResearchResultsComponent
     ]
})
export class OpenaireSearchResearchResultsModule { }
