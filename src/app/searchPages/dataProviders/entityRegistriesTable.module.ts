import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{OpenaireSearchEntityRegistriesTableComponent} from './entityRegistriesTable.component';
 import {EntityRegistriesTableRoutingModule} from './entityRegistriesTable-routing.module';
import {  EntityRegistriesTableModule} from '../../openaireLibrary/searchPages/dataProviders/entityRegistriesTable.module';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    EntityRegistriesTableRoutingModule,
    EntityRegistriesTableModule

  ],  providers:[FreeGuard, IsRouteEnabled],
  declarations: [
    OpenaireSearchEntityRegistriesTableComponent
   ],
  exports: [
    OpenaireSearchEntityRegistriesTableComponent
     ]
})
export class LibEntityRegistriesTableModule { }
