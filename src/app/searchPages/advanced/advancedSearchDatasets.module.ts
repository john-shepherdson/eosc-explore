import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdvancedSearchDatasetsRoutingModule} from './advancedSearchDatasets-routing.module';
import {OpenaireAdvancedSearchDatasetsComponent} from './advancedSearchDatasets.component';
import {AdvancedSearchResearchResultsModule} from "../../openaireLibrary/searchPages/advanced/advancedSearchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchResearchResultsModule,
   AdvancedSearchDatasetsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchDatasetsComponent
   ],
  providers:[FreeGuard],
  exports: [
    OpenaireAdvancedSearchDatasetsComponent
     ]
})
export class LibAdvancedSearchDatasetsModule { }
