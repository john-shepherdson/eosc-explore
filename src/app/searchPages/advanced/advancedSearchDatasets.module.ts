import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ AdvancedSearchDatasetsRoutingModule} from './advancedSearchDatasets-routing.module';
import{OpenaireAdvancedSearchDatasetsComponent} from './advancedSearchDatasets.component';


 import {AdvancedSearchDatasetsModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchDatasets.module';
 import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
 import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
 import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchDatasetsModule,
   AdvancedSearchDatasetsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchDatasetsComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireAdvancedSearchDatasetsComponent
     ]
})
export class LibAdvancedSearchDatasetsModule { }
