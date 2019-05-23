import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ CompatibleDataProvidersRoutingModule} from './compatibleDataProviders-routing.module';
import{OpenaireSearchCompatibleDataprovidersComponent} from './compatibleDataProviders.component';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

import {  CompatibleDataProvidersModule} from '../../openaireLibrary/searchPages/dataProviders/compatibleDataProviders.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    CompatibleDataProvidersModule,
    CompatibleDataProvidersRoutingModule

  ],
  declarations: [
    OpenaireSearchCompatibleDataprovidersComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireSearchCompatibleDataprovidersComponent
     ]
})
export class LibCompatibleDataProvidersModule { }
