import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdvancedSearchDataProvidersRoutingModule} from './advancedSearchDataProviders-routing.module';
import {OpenaireAdvancedSearchDataProvidersComponent} from './advancedSearchDataProviders.component';

import {SearchDataProvidersModule} from "../../openaireLibrary/searchPages/searchDataProviders.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchDataProvidersRoutingModule,
    SearchDataProvidersModule

  ],
  declarations: [
    OpenaireAdvancedSearchDataProvidersComponent
   ],
  providers:[],
  exports: [
    OpenaireAdvancedSearchDataProvidersComponent
     ]
})
export class LibAdvancedSearchDataProvidersModule { }
