import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdvancedSearchDataProvidersRoutingModule} from './advancedSearchDataProviders-routing.module';
import {OpenaireAdvancedSearchServicesComponent} from './advancedSearchServices.component';

import {SearchDataProvidersModule} from "../../openaireLibrary/searchPages/searchDataProviders.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchDataProvidersRoutingModule,
    SearchDataProvidersModule

  ],
  declarations: [
    OpenaireAdvancedSearchServicesComponent
  ],
  providers:[],
  exports: [
    OpenaireAdvancedSearchServicesComponent
  ]
})
export class LibAdvancedSearchServicesModule { }
