//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrganizationModule } from '../../openaireLibrary/landingPages/organization/organization.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { OpenaireOrganizationComponent } from './organization.component';
import {OrganizationRoutingModule} from './organization-routing.module';

@NgModule({
  imports: [OrganizationModule, OrganizationRoutingModule],
  declarations:[OpenaireOrganizationComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireOrganizationComponent]
})
export class LibOrganizationModule { }
