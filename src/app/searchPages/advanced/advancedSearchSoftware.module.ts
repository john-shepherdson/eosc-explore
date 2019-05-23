import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ AdvancedSearchSoftwareRoutingModule} from './advancedSearchSoftware-routing.module';
import{OpenaireAdvancedSearchSoftwareComponent} from './advancedSearchSoftware.component';


 import {AdvancedSearchSoftwareModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchSoftware.module';
 import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
 import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
 import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchSoftwareModule,
    AdvancedSearchSoftwareRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchSoftwareComponent
   ],
  providers:[FreeGuard
    ],
  exports: [
    OpenaireAdvancedSearchSoftwareComponent
     ]
})
export class LibAdvancedSearchSoftwareModule { }
