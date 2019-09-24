import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdvancedSearchSoftwareRoutingModule} from './advancedSearchSoftware-routing.module';
import {OpenaireAdvancedSearchSoftwareComponent} from './advancedSearchSoftware.component';
import {AdvancedSearchResearchResultsModule} from "../../openaireLibrary/searchPages/advanced/advancedSearchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchResearchResultsModule,
    AdvancedSearchSoftwareRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchSoftwareComponent
   ],
  providers:[FreeGuard
    ],
  exports: [
    OpenaireAdvancedSearchSoftwareComponent
     ]
})
export class LibAdvancedSearchSoftwareModule { }
