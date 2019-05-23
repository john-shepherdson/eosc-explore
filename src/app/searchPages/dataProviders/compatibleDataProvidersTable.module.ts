import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{OpenaireSearchCompatibleDataprovidersTableComponent} from './compatibleDataProvidersTable.component';
import {CompatibleDataProvidersTableRoutingModule} from './compatibleDataProvidersTable-routing.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import {  CompatibleDataProvidersTableModule} from '../../openaireLibrary/searchPages/dataProviders/compatibleDataProvidersTable.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    CompatibleDataProvidersTableModule,
      CompatibleDataProvidersTableRoutingModule

  ],  providers:[FreeGuard, IsRouteEnabled],
  declarations: [
    OpenaireSearchCompatibleDataprovidersTableComponent
   ],
  exports: [
    OpenaireSearchCompatibleDataprovidersTableComponent
     ]
})
export class LibCompatibleDataProvidersTableModule { }
