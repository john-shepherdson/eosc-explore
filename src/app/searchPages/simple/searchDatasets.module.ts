import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchDatasetsRoutingModule} from './searchDatasets-routing.module';
import{OpenaireSearchDatasetsComponent} from './searchDatasets.component';

import {SearchDatasetsModule} from '../../openaireLibrary/searchPages/simple/searchDatasets.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'


@NgModule({
  imports: [
    CommonModule, FormsModule,
  SearchDatasetsModule , SearchDatasetsRoutingModule

  ],
  declarations: [
    OpenaireSearchDatasetsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled],
  exports: [
    OpenaireSearchDatasetsComponent
     ]
})
export class LibSearchDatasetsModule { }
