import {NgModule} from '@angular/core';
import {OrganizationModule} from '../../openaireLibrary/landingPages/organization/organization.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenaireOrganizationComponent} from './organization.component';
import {OrganizationRoutingModule} from './organization-routing.module';

@NgModule({
  imports: [OrganizationModule, OrganizationRoutingModule],
  declarations:[OpenaireOrganizationComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireOrganizationComponent]
})
export class LibOrganizationModule { }
