import {NgModule} from '@angular/core';
import {MainSearchModule} from '../../openaireLibrary/searchPages/find/mainSearch.module';

import {OpenaireSearchComponent} from './search.component';
import {MainSearchRoutingModule} from './mainSearch-routing.module';
import {FreeGuard} from "../../openaireLibrary/login/freeGuard.guard";
import {PreviousRouteRecorder} from "../../openaireLibrary/utils/piwik/previousRouteRecorder.guard";

@NgModule({
  imports: [ MainSearchRoutingModule, MainSearchModule],
  declarations:[OpenaireSearchComponent],
  exports:[OpenaireSearchComponent],
  providers: [FreeGuard, PreviousRouteRecorder]
})
export class LibMainSearchModule { }
