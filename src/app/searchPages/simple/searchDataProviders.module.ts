import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {OpenaireSearchDataprovidersComponent} from './searchDataproviders.component';
import{ SearchDataProvidersRoutingModule} from './searchDataProviders-routing.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'
import {SearchDataProvidersModule} from '../../openaireLibrary/searchPages/simple/searchDataProviders.module';
@NgModule({
  imports: [
    CommonModule, FormsModule,
SearchDataProvidersModule, SearchDataProvidersRoutingModule

  ],
  declarations: [
    OpenaireSearchDataprovidersComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled],
  exports: [
    OpenaireSearchDataprovidersComponent
     ]
})
export class LibSearchDataProvidersModule { }
