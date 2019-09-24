import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchDatasetsRoutingModule} from './searchDatasets-routing.module';
import {OpenaireSearchDatasetsComponent} from './searchDatasets.component';

import {SearchResearchResultsModule} from "../../openaireLibrary/searchPages/simple/searchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchResearchResultsModule , SearchDatasetsRoutingModule

  ],
  declarations: [
    OpenaireSearchDatasetsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder],
  exports: [
    OpenaireSearchDatasetsComponent
     ]
})
export class LibSearchDatasetsModule { }
