import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchOrpsRoutingModule} from './searchOrps-routing.module';
import {OpenaireSearchOrpsComponent} from './searchOrps.component';
import {SearchResearchResultsModule} from "../../openaireLibrary/searchPages/simple/searchResearchResults.module";
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchResearchResultsModule , SearchOrpsRoutingModule

  ],
  declarations: [
    OpenaireSearchOrpsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder],
  exports: [
    OpenaireSearchOrpsComponent
     ]
})
export class LibSearchOrpsModule { }
