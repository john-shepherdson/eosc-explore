import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ JournalsRoutingModule} from './journals-routing.module';
import{OpenaireSearchJournalsComponent} from './journals.component';
import { JournalsModule} from '../../openaireLibrary/searchPages/dataProviders/journals.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
@NgModule({
  imports: [
    CommonModule, FormsModule, JournalsRoutingModule, JournalsModule

  ],
  declarations: [
    OpenaireSearchJournalsComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireSearchJournalsComponent
     ]
})
export class LibJournalsModule { }
