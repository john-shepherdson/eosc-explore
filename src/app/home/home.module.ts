import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RouterModule } from '@angular/router';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

import { DataProvidersServiceModule} from '../openaireLibrary/services/dataProvidersService.module';
import { SearchResearchResultsServiceModule} from '../openaireLibrary/services/searchResearchResultsService.module';
import { ProjectsServiceModule} from '../openaireLibrary/services/projectsService.module';
import { OrganizationsServiceModule} from '../openaireLibrary/services/organizationsService.module';
import { SearchFormModule} from '../openaireLibrary/searchPages/searchUtils/searchForm.module';
import { PiwikServiceModule} from '../openaireLibrary/utils/piwik/piwikService.module';

import {HelperModule} from '../openaireLibrary/utils/helper/helper.module';

import {RefineFieldResultsServiceModule} from '../openaireLibrary/services/refineFieldResultsService.module';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import { SEOServiceModule } from '../openaireLibrary/sharedComponents/SEO/SEOService.module';

import {ErrorMessagesModule} from '../openaireLibrary/utils/errorMessages.module';
import {EntitiesSelectionModule} from "../openaireLibrary/searchPages/searchUtils/entitiesSelection.module";
import {QuickSelectionsModule} from "../openaireLibrary/searchPages/searchUtils/quick-selections.module";
import {IconsModule} from "../openaireLibrary/utils/icons/icons.module";
import {IconsService} from "../openaireLibrary/utils/icons/icons.service";
import {arrow_right, book, cog, database, earth} from "../openaireLibrary/utils/icons/icons";
import {NumbersModule} from "../openaireLibrary/sharedComponents/numbers/numbers.module";
import {AdvancedSearchInputModule} from "../openaireLibrary/sharedComponents/advanced-search-input/advanced-search-input.module";
import {InputModule} from "../openaireLibrary/sharedComponents/input/input.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    RefineFieldResultsServiceModule,
    DataProvidersServiceModule, SearchResearchResultsServiceModule,
    ProjectsServiceModule, OrganizationsServiceModule,
    SearchFormModule,
    PiwikServiceModule,
    HomeRoutingModule,
    HelperModule,
    ErrorMessagesModule,
    SEOServiceModule, EntitiesSelectionModule, QuickSelectionsModule, IconsModule, NumbersModule, AdvancedSearchInputModule, InputModule
  ],
  declarations: [
    HomeComponent
  ],
  providers:[
    PreviousRouteRecorder
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
  constructor(private iconsService: IconsService) {
    this.iconsService.registerIcons([arrow_right, book, earth, cog, database]);
  }
}
