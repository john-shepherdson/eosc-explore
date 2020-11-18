import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdvancedSearchProjectsRoutingModule} from './advancedSearchProjects-routing.module';
import {OpenaireAdvancedSearchProjectsComponent} from './advancedSearchProjects.component';
import {SearchProjectsModule} from "../../openaireLibrary/searchPages/searchProjects.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchProjectsModule,
   AdvancedSearchProjectsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchProjectsComponent
   ],
  providers:[],
  exports: [
    OpenaireAdvancedSearchProjectsComponent
     ]
})
export class LibAdvancedSearchProjectsModule { }
