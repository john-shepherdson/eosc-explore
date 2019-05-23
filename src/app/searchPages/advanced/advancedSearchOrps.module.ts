import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AdvancedSearchOrpsRoutingModule} from './advancedSearchOrps-routing.module';
import { OpenaireAdvancedSearchOrpsComponent} from './advancedSearchOrps.component';


 import {AdvancedSearchOrpsModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchOrps.module';
 import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
 import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
 import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchOrpsModule,
    AdvancedSearchOrpsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchOrpsComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireAdvancedSearchOrpsComponent
     ]
})
export class LibAdvancedSearchOrpsModule { }
