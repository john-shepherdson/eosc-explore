import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
import {EnvironmentSpecificService} from './openaireLibrary/utils/properties/environment-specific.service';

import {OpenaireErrorPageComponent} from './error/errorPage.component';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {
    path: 'search/result',
    loadChildren: './landingPages/result/libResult.module#LibResultModule'
  },
  {
    path: 'search/publication',
    loadChildren: './landingPages/publication/libPublication.module#LibPublicationModule'
  },
  {
    path: 'search/dataset',
    loadChildren: './landingPages/dataset/libDataset.module#LibDatasetModule'
  },
  {
    path: 'search/software',
    loadChildren: './landingPages/software/libSoftware.module#LibSoftwareModule'
  },
  {
    path: 'search/other',
    loadChildren: './landingPages/orp/libOrp.module#LibOrpModule'
  },
  {
    path: 'search/project',
    loadChildren: './landingPages/project/libProject.module#LibProjectModule'
  },
  {
    path: 'search/dataprovider',
    loadChildren: './landingPages/dataProvider/libDataProvider.module#LibDataProviderModule'
  },
  {
    path: 'search/organization',
    loadChildren: './landingPages/organization/libOrganization.module#LibOrganizationModule'
  },
  {
    path: 'search/find',
    loadChildren: './searchPages/find/libSearch.module#LibMainSearchModule'
  },
  {
    path: 'search/find/research-outcomes',
    loadChildren: './searchPages/simple/searchResearchResults.module#OpenaireSearchResearchResultsModule'
  },
  {
    path: 'search/find/projects',
    loadChildren: './searchPages/simple/searchProjects.module#LibSearchProjectsModule'
  },
  {
    path: 'search/find/dataproviders',
    loadChildren: './searchPages/simple/searchDataProviders.module#LibSearchDataProvidersModule'
  },
  {
    path: 'search/find/organizations',
    loadChildren: './searchPages/simple/searchOrganizations.module#LibSearchOrganizationsModule'
  },
  {
    path: 'search/advanced/research-outcomes',
    loadChildren: './searchPages/advanced/searchResearchResults.module#OpenaireAdvancedSearchResearchResultsModule'
  },
  {
    path: 'search/advanced/organizations',
    loadChildren: './searchPages/advanced/advancedSearchOrganizations.module#LibAdvancedSearchOrganizationsModule'
  },
  {
    path: 'search/advanced/dataproviders',
    loadChildren: './searchPages/advanced/advancedSearchDataProviders.module#LibAdvancedSearchDataProvidersModule'
  },
  {
    path: 'search/advanced/projects',
    loadChildren: './searchPages/advanced/advancedSearchProjects.module#LibAdvancedSearchProjectsModule'
  },
  {
    path: 'project-report',
    loadChildren: './landingPages/htmlProjectReport/libHtmlProjectReport.module#LibHtmlProjectReportModule'
  },
  // Deposit Pages
  { path: 'participate/deposit-datasets',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-datasets-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-subject-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-publications',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-publications-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  
  { path: 'participate/deposit/learn-how', loadChildren: './deposit/deposit.module#LibDepositModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'participate/deposit/search', loadChildren: './deposit/searchDataprovidersToDeposit.module#LibSearchDataprovidersToDepositModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  
  // Linking Pages
  { path: 'myclaims', loadChildren: './claims/myClaims/myClaims.module#LibMyClaimsModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'participate/claim', loadChildren: './claims/linking/linkingGeneric.module#LibLinkingGenericModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},
  { path: 'participate/direct-claim', loadChildren: './claims/directLinking/directLinking.module#LibDirectLinkingModule', resolve: { envSpecific: EnvironmentSpecificResolver  }},

  {path: 'develop', loadChildren: './develop/develop.module#DevelopModule'},

  {path: 'user-info', loadChildren: './login/libUser.module#LibUserModule'},
  {path: 'error', component: OpenaireErrorPageComponent},
  {path: '**', pathMatch: 'full', component: OpenaireErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EnvironmentSpecificResolver, EnvironmentSpecificService]
})
export class AppRoutingModule {
}
