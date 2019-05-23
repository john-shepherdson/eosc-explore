import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ AdvancedSearchDataProvidersRoutingModule} from './advancedSearchDataProviders-routing.module';
import{OpenaireAdvancedSearchDataProvidersComponent} from './advancedSearchDataProviders.component';
import {AdvancedSearchDataProvidersModule } from '../../openaireLibrary/searchPages/advanced/advancedSearchDataProviders.module';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchDataProvidersRoutingModule,
    AdvancedSearchDataProvidersModule

  ],
  declarations: [
    OpenaireAdvancedSearchDataProvidersComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireAdvancedSearchDataProvidersComponent
     ]
})
export class LibAdvancedSearchDataProvidersModule { }
