import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: '../home/home.module#HomeModule'},
  { path: 'search/result',
    loadChildren: '../landingPages/result/libResult.module#LibResultModule'
  },
  {
    path: 'search/publication',
    loadChildren: '../landingPages/publication/libPublication.module#LibPublicationModule'
  },
  {
    path: 'search/dataset',
    loadChildren: '../landingPages/dataset/libDataset.module#LibDatasetModule'
  },
  {
    path: 'search/software',
    loadChildren: '../landingPages/software/libSoftware.module#LibSoftwareModule'
  },
  {
    path: 'search/other',
    loadChildren: '../landingPages/orp/libOrp.module#LibOrpModule'
  },
  {
    path: 'search/project',
    loadChildren: '../landingPages/project/libProject.module#LibProjectModule'
  },
  {
    path: 'search/dataprovider',
    loadChildren: '../landingPages/dataProvider/libDataProvider.module#LibDataProviderModule'
  },
  {
    path: 'search/organization',
    loadChildren: '../landingPages/organization/libOrganization.module#LibOrganizationModule'
  },
  {
    path: 'search/find',
    loadChildren: '../searchPages/find/libSearch.module#LibMainSearchModule'
  },
  { path: 'search/find/research-outcomes', loadChildren:  '../searchPages/simple/searchResearchResults.module#OpenaireSearchResearchResultsModule'
  },
  {
    path: 'search/find/projects',
    loadChildren: '../searchPages/simple/searchProjects.module#LibSearchProjectsModule'
  },
  {
    path: 'search/find/dataproviders',
    loadChildren: '../searchPages/simple/searchDataProviders.module#LibSearchDataProvidersModule'
  },
  {
    path: 'search/find/organizations',
    loadChildren: '../searchPages/simple/searchOrganizations.module#LibSearchOrganizationsModule'
  },
  { path: 'search/advanced/research-outcomes',
    loadChildren:  '../searchPages/advanced/searchResearchResults.module#OpenaireAdvancedSearchResearchResultsModule'
  },
  {
    path: 'search/advanced/organizations',
    loadChildren: '../searchPages/advanced/advancedSearchOrganizations.module#LibAdvancedSearchOrganizationsModule'
  },
  {
    path: 'search/advanced/dataproviders',
    loadChildren: '../searchPages/advanced/advancedSearchDataProviders.module#LibAdvancedSearchDataProvidersModule'
  },
  {
    path: 'search/advanced/projects',
    loadChildren: '../searchPages/advanced/advancedSearchProjects.module#LibAdvancedSearchProjectsModule'
  },
  {
    path: 'project-report',
    loadChildren: '../landingPages/htmlProjectReport/libHtmlProjectReport.module#LibHtmlProjectReportModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggregatorRoutingModule {
}
