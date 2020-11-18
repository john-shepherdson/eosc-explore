import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchOrganizationsRoutingModule} from './searchOrganizations-routing.module';
import {OpenaireSearchOrganizationsComponent} from './searchOrganizations.component';

import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchOrganizationsModule} from "../../openaireLibrary/searchPages/searchOrganizations.module";


@NgModule({
  imports: [
    CommonModule, FormsModule,
      SearchOrganizationsRoutingModule, SearchOrganizationsModule

  ],
  declarations: [
    OpenaireSearchOrganizationsComponent
   ],
  providers:[PreviousRouteRecorder],
  exports: [
    OpenaireSearchOrganizationsComponent
     ]
})
export class LibSearchOrganizationsModule { }
