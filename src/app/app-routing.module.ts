import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
import { EnvironmentSpecificService} from './openaireLibrary/utils/properties/environment-specific.service';

import { OpenaireErrorPageComponent } from './error/errorPage.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: ':id', loadChildren: './home/home.module#HomeModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/publication', loadChildren: './landingPages/publication/libPublication.module#LibPublicationModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/dataset', loadChildren: './landingPages/dataset/libDataset.module#LibDatasetModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/software', loadChildren: './landingPages/software/libSoftware.module#LibSoftwareModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/other', loadChildren: './landingPages/orp/libOrp.module#LibOrpModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/project', loadChildren: './landingPages/project/libProject.module#LibProjectModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/dataprovider', loadChildren: '././landingPages/dataProvider/libDataProvider.module#LibDataProviderModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/organization', loadChildren: './landingPages/organization/libOrganization.module#LibOrganizationModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: ':id/search/find', loadChildren: './searchPages/find/libSearch.module#LibMainSearchModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find',  loadChildren: './searchPages/find/libSearch.module#LibMainSearchModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},

  { path: 'search/find/publications', loadChildren: './searchPages/simple/searchPublications.module#LibSearchPublicationsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/datasets', loadChildren: './searchPages/simple/searchDatasets.module#LibSearchDatasetsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/software', loadChildren: './searchPages/simple/searchSoftware.module#LibSearchSoftwareModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/other', loadChildren: './searchPages/simple/searchOrps.module#LibSearchOrpsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/projects', loadChildren: './searchPages/simple/searchProjects.module#LibSearchProjectsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/dataproviders', loadChildren: './searchPages/simple/searchDataProviders.module#LibSearchDataProvidersModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/find/organizations', loadChildren: './searchPages/simple/searchOrganizations.module#LibSearchOrganizationsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/publications', loadChildren: './searchPages/advanced/advancedSearchPublications.module#LibAdvancedSearchPublicationsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/datasets', loadChildren: './searchPages/advanced/advancedSearchDatasets.module#LibAdvancedSearchDatasetsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/software', loadChildren: './searchPages/advanced/advancedSearchSoftware.module#LibAdvancedSearchSoftwareModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/other', loadChildren: './searchPages/advanced/advancedSearchOrps.module#LibAdvancedSearchOrpsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/organizations', loadChildren: './searchPages/advanced/advancedSearchOrganizations.module#LibAdvancedSearchOrganizationsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/dataproviders', loadChildren: './searchPages/advanced/advancedSearchDataProviders.module#LibAdvancedSearchDataProvidersModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'search/advanced/projects', loadChildren: './searchPages/advanced/advancedSearchProjects.module#LibAdvancedSearchProjectsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'project-report', loadChildren: './landingPages/htmlProjectReport/libHtmlProjectReport.module#LibHtmlProjectReportModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  // { path: 'reload', loadChildren: './reload/libReload.module#LibReloadModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  // { path: 'user-info', loadChildren: './login/libUser.module#LibUserModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'error', component: OpenaireErrorPageComponent, resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: '**',pathMatch: 'full',component: OpenaireErrorPageComponent, resolve: { envSpecific: EnvironmentSpecificResolver  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EnvironmentSpecificResolver, EnvironmentSpecificService]
})
export class AppRoutingModule { }
