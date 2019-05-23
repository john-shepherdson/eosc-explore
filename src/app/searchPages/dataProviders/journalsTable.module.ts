import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{OpenaireSearchJournalsTableComponent} from './journalsTable.component';

import {JournalsTableRoutingModule} from './journalsTable-routing.module';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { JournalsTableModule} from '../../openaireLibrary/searchPages/dataProviders/journalsTable.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    JournalsTableModule, JournalsTableRoutingModule

  ],  providers:[FreeGuard, IsRouteEnabled],
  declarations: [
    OpenaireSearchJournalsTableComponent
   ],
  exports: [
    OpenaireSearchJournalsTableComponent
     ]
})
export class LibJournalsTableModule { }
