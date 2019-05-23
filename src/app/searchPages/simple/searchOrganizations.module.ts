import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchOrganizationsRoutingModule} from './searchOrganizations-routing.module';
import{OpenaireSearchOrganizationsComponent} from './searchOrganizations.component';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

import { SearchOrganizationsModule} from '../../openaireLibrary/searchPages/simple/searchOrganizations.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
      SearchOrganizationsRoutingModule, SearchOrganizationsModule

  ],
  declarations: [
    OpenaireSearchOrganizationsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled],
  exports: [
    OpenaireSearchOrganizationsComponent
     ]
})
export class LibSearchOrganizationsModule { }
