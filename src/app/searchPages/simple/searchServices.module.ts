import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchServicesRoutingModule} from './searchServices-routing.module';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchDataProvidersModule} from "../../openaireLibrary/searchPages/searchDataProviders.module";
import {OpenaireSearchServicesComponent} from "./searchServices.component";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchDataProvidersModule, SearchServicesRoutingModule

  ],
  declarations: [
    OpenaireSearchServicesComponent
  ],
  providers:[PreviousRouteRecorder],
  exports: [
    OpenaireSearchServicesComponent
  ]
})
export class LibSearchServicesModule { }
