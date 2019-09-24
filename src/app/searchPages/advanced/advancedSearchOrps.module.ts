import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdvancedSearchOrpsRoutingModule} from './advancedSearchOrps-routing.module';
import {OpenaireAdvancedSearchOrpsComponent} from './advancedSearchOrps.component';
import {AdvancedSearchResearchResultsModule} from "../../openaireLibrary/searchPages/advanced/advancedSearchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchResearchResultsModule,
    AdvancedSearchOrpsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchOrpsComponent
   ],
  providers:[FreeGuard],
  exports: [
    OpenaireAdvancedSearchOrpsComponent
     ]
})
export class LibAdvancedSearchOrpsModule { }
