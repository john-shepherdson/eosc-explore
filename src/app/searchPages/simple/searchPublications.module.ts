import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchPublicationsRoutingModule} from './searchPublications-routing.module';
import{OpenaireSearchPublicationsComponent} from './searchPublications.component';

import { SearchPublicationsModule} from '../../openaireLibrary/searchPages/simple/searchPublications.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchPublicationsModule,

      SearchPublicationsRoutingModule

  ],
  declarations: [
    OpenaireSearchPublicationsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled],
  exports: [
    OpenaireSearchPublicationsComponent
     ]
})
export class LibSearchPublicationsModule { }
