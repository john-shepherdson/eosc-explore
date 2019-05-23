import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RouterModule } from '@angular/router';

import{HomeRoutingModule} from './home-routing.module';
import{HomeComponent} from './home.component';

import {  DataProvidersServiceModule} from '../openaireLibrary/services/dataProvidersService.module';
import {  DatasetsServiceModule} from '../openaireLibrary/services/datasetsService.module';
import {  ProjectsServiceModule} from '../openaireLibrary/services/projectsService.module';
import {  PublicationsServiceModule} from '../openaireLibrary/services/publicationsService.module';
import {  OrganizationsServiceModule} from '../openaireLibrary/services/organizationsService.module';
import { SearchFormModule} from '../openaireLibrary/searchPages/searchUtils/searchForm.module';
import {PiwikServiceModule} from '../openaireLibrary/utils/piwik/piwikService.module';

import {HelperModule} from '../openaireLibrary/utils/helper/helper.module';

import {RefineFieldResultsServiceModule} from '../openaireLibrary/services/refineFieldResultsService.module';
import {ConfigurationService} from '../openaireLibrary/utils/configuration/configuration.service';
import {FreeGuard} from '../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {Schema2jsonldModule} from '../openaireLibrary/sharedComponents/schema2jsonld/schema2jsonld.module';
import { SEOServiceModule } from '../openaireLibrary/sharedComponents/SEO/SEOService.module';

import {ErrorMessagesModule} from '../openaireLibrary/utils/errorMessages.module';

 @NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
     RefineFieldResultsServiceModule,
    DataProvidersServiceModule, DatasetsServiceModule, ProjectsServiceModule,
     PublicationsServiceModule,
    OrganizationsServiceModule,
     SearchFormModule,
      PiwikServiceModule,
      HomeRoutingModule,
      HelperModule,
      ErrorMessagesModule,
      Schema2jsonldModule, SEOServiceModule
  ],
  declarations: [
    HomeComponent
   ],
  providers:[
    FreeGuard, PreviousRouteRecorder, ConfigurationService
    ],
  exports: [
    HomeComponent
     ]
})
export class HomeModule { }
