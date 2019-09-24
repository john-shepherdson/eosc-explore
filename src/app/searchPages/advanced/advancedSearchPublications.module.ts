import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdvancedSearchPublicationsRoutingModule} from './advancedSearchPublications-routing.module';
import {OpenaireAdvancedSearchPublicationsComponent} from './advancedSearchPublications.component';


import {AdvancedSearchResearchResultsModule} from "../../openaireLibrary/searchPages/advanced/advancedSearchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchResearchResultsModule,
   AdvancedSearchPublicationsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchPublicationsComponent
   ],
  providers:[FreeGuard],
  exports: [
    OpenaireAdvancedSearchPublicationsComponent
     ]
})
export class LibAdvancedSearchPublicationsModule { }
