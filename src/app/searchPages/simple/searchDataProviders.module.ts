import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OpenaireSearchDataprovidersComponent} from './searchDataproviders.component';
import {SearchDataProvidersRoutingModule} from './searchDataProviders-routing.module';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchDataProvidersModule} from "../../openaireLibrary/searchPages/searchDataProviders.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
SearchDataProvidersModule, SearchDataProvidersRoutingModule

  ],
  declarations: [
    OpenaireSearchDataprovidersComponent
   ],
  providers:[PreviousRouteRecorder],
  exports: [
    OpenaireSearchDataprovidersComponent
     ]
})
export class LibSearchDataProvidersModule { }
