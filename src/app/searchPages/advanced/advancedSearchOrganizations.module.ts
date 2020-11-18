import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdvancedSearchOrganizationsRoutingModule} from './advancedSearchOrganizations-routing.module';
import {OpenaireAdvancedSearchOrganizationsComponent} from './advancedSearchOrganizations.component';
import {SearchOrganizationsModule} from "../../openaireLibrary/searchPages/searchOrganizations.module";

@NgModule({
  imports: [
    CommonModule, FormsModule,
   SearchOrganizationsModule,
   AdvancedSearchOrganizationsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchOrganizationsComponent
   ],
  providers:[],
  exports: [
    OpenaireAdvancedSearchOrganizationsComponent
     ]
})
export class LibAdvancedSearchOrganizationsModule { }
