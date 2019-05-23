import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ AdvancedSearchProjectsRoutingModule} from './advancedSearchProjects-routing.module';
import{OpenaireAdvancedSearchProjectsComponent} from './advancedSearchProjects.component';


 import {AdvancedSearchProjectsModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchProjects.module';
 import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
 import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
 import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchProjectsModule,
   AdvancedSearchProjectsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchProjectsComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireAdvancedSearchProjectsComponent
     ]
})
export class LibAdvancedSearchProjectsModule { }
