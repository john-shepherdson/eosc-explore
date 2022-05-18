import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OpenaireAdvancedSearchServicesComponent} from './advancedSearchServices.component';

import {SearchDataProvidersModule} from "../../openaireLibrary/searchPages/searchDataProviders.module";
import {AdvancedSearchServicesRoutingModule} from "./advancedSearchServices-routing.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchServicesRoutingModule,
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
