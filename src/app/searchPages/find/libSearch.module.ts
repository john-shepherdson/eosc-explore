import {NgModule} from '@angular/core';

import {OpenaireSearchComponent} from './search.component';
import {MainSearchRoutingModule} from './mainSearch-routing.module';
import {PreviousRouteRecorder} from "../../openaireLibrary/utils/piwik/previousRouteRecorder.guard";
import {SearchAllModule} from "../../openaireLibrary/searchPages/find/searchAll.module";

@NgModule({
  imports: [ MainSearchRoutingModule, SearchAllModule],
  declarations:[OpenaireSearchComponent],
  exports:[OpenaireSearchComponent],
  providers: [ PreviousRouteRecorder]
})
export class LibMainSearchModule { }
