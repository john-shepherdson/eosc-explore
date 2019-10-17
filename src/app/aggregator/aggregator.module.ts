import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {AggregatorRoutingModule} from "./aggregator-routing.module";
import {EnvironmentSpecificResolver} from "../openaireLibrary/utils/properties/environmentSpecificResolver";
import {SharedModule} from "../shared/shared.module";

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    AggregatorRoutingModule
  ],
  providers: [
    EnvironmentSpecificResolver
  ],
})

export class AggregatorModule {
}
