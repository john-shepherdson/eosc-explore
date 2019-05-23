import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ EntityRegistriesRoutingModule} from './entityRegistries-routing.module';
import{OpenaireSearchEntityRegistriesComponent} from './entityRegistries.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';

import {EntityRegistriesModule } from '../../openaireLibrary/searchPages/dataProviders/entityRegistries.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    EntityRegistriesModule, EntityRegistriesRoutingModule

  ],
  declarations: [
    OpenaireSearchEntityRegistriesComponent
   ],
  providers:[FreeGuard, IsRouteEnabled],
  exports: [
    OpenaireSearchEntityRegistriesComponent
     ]
})
export class LibEntityRegistriesModule { }
