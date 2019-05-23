import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchSoftwareRoutingModule} from './searchSoftware-routing.module';
import{OpenaireSearchSoftwareComponent} from './searchSoftware.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'


import { SearchSoftwareModule} from '../../openaireLibrary/searchPages/simple/searchSoftware.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchSoftwareModule, SearchSoftwareRoutingModule
  ],
  declarations: [
    OpenaireSearchSoftwareComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled
    ],
  exports: [
    OpenaireSearchSoftwareComponent
     ]
})
export class LibSearchSoftwareModule { }
