import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ AdvancedSearchPublicationsRoutingModule} from './advancedSearchPublications-routing.module';
import{OpenaireAdvancedSearchPublicationsComponent} from './advancedSearchPublications.component';


 import {AdvancedSearchPublicationsModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchPublications.module';
 import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
 import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
 import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchPublicationsModule,
   AdvancedSearchPublicationsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchPublicationsComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireAdvancedSearchPublicationsComponent
     ]
})
export class LibAdvancedSearchPublicationsModule { }
