import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {OpenaireErrorPageComponent} from './error/errorPage.component';
import {ConfigurationService} from "./openaireLibrary/utils/configuration/configuration.service";

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
// Landing Pages
  {path: 'search/result', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {type: 'result', showHeader: true}},
  {path: 'search/publication', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {type: 'publication', showHeader: true}},
  {path: 'search/dataset', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {type: 'dataset', showHeader: true}},
  {path: 'search/software', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {type: 'software', showHeader: true}},
  {path: 'search/other', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {type: 'orp', showHeader: true}},
  {path: 'search/project', loadChildren: () => import('./openaireLibrary/landingPages/project/project.module').then(m => m.ProjectModule), data: {showHeader: true}},
  {path: 'search/dataprovider', loadChildren: () => import('./openaireLibrary/landingPages/dataProvider/dataProvider.module').then(m => m.DataProviderModule), data: {type: 'dataProvider', showHeader: true}},
  {path: 'search/service', loadChildren: () => import('./openaireLibrary/landingPages/dataProvider/dataProvider.module').then(m => m.DataProviderModule), data: {type: 'service', showHeader: true}},
  {path: 'search/organization', loadChildren: () => import('./openaireLibrary/landingPages/organization/organization.module').then(m => m.OrganizationModule), data: {showHeader: true}},

  // {
  //   path: 'search/result',
  //   loadChildren: () => import('./landingPages/result/libResult.module').then(m => m.LibResultModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/publication',
  //   loadChildren: () => import('./landingPages/publication/libPublication.module').then(m => m.LibPublicationModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/dataset',
  //   loadChildren: () => import('./landingPages/dataset/libDataset.module').then(m => m.LibDatasetModule), data: { showHeader: true}
  // },
  // // {path: 'search/dataset', loadChildren: () => import('./openaireLibrary/landingPages/result/resultLanding.module').then(m => m.ResultLandingModule), data: {hasQuickContact: false, hasMenuSearchBar: true, type: 'dataset', community: 'openaire'}},
  // {
  //   path: 'search/software',
  //   loadChildren: () => import('./landingPages/software/libSoftware.module').then(m => m.LibSoftwareModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/other',
  //   loadChildren: () => import('./landingPages/orp/libOrp.module').then(m => m.LibOrpModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/project',
  //   loadChildren: () => import('./landingPages/project/libProject.module').then(m => m.LibProjectModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/dataprovider',
  //   loadChildren: () => import('./landingPages/dataProvider/libDataProvider.module').then(m => m.LibDataProviderModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/service',
  //   loadChildren: () => import('./landingPages/service/libService.module').then(m => m.LibServiceModule), data: { showHeader: true}
  // },
  // {
  //   path: 'search/organization',
  //   loadChildren: () => import('./landingPages/organization/libOrganization.module').then(m => m.LibOrganizationModule), data: { showHeader: true}
  // },
  {
    path: 'search/find',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/find/libSearch.module').then(m => m.LibMainSearchModule)
  },
  {
    path: 'search/find/research-outcomes',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/simple/searchResearchResults.module').then(m => m.OpenaireSearchResearchResultsModule)
  },
  {
    path: 'search/find/projects',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/simple/searchProjects.module').then(m => m.LibSearchProjectsModule)
  },
  {
    path: 'search/find/dataproviders',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/simple/searchDataProviders.module').then(m => m.LibSearchDataProvidersModule)
  },
  {
    path: 'search/find/services',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/simple/searchServices.module').then(m => m.LibSearchServicesModule)
  },
  {
    path: 'search/find/organizations',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/simple/searchOrganizations.module').then(m => m.LibSearchOrganizationsModule)
  },
  {
    path: 'search/advanced/research-outcomes',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/advanced/searchResearchResults.module').then(m => m.OpenaireAdvancedSearchResearchResultsModule)
  },
  {
    path: 'search/advanced/organizations',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/advanced/advancedSearchOrganizations.module').then(m => m.LibAdvancedSearchOrganizationsModule)
  },
  {
    path: 'search/advanced/dataproviders',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/advanced/advancedSearchDataProviders.module').then(m => m.LibAdvancedSearchDataProvidersModule)
  },
  {
    path: 'search/advanced/services',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/advanced/advancedSearchServices.module').then(m => m.LibAdvancedSearchServicesModule)
  },
  {
    path: 'search/advanced/projects',
    redirectTo: ''
    // loadChildren: () => import('./searchPages/advanced/advancedSearchProjects.module').then(m => m.LibAdvancedSearchProjectsModule)
  },
  {
    path: 'reload',
    loadChildren: () => import('./reload/libReload.module').then(m => m.LibReloadModule),
    data: {hasSidebar: false}
  },
  {path: 'user-info', loadChildren: () => import('./login/libUser.module').then(m => m.LibUserModule)},
  {path: 'error', component: OpenaireErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  subs = [];
  enabledRoutes =[];
  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
  constructor( private config: ConfigurationService, private router: Router){
    this.subs.push(this.config.portalAsObservable.subscribe(data => {
        if (data) {
          if (data['pages']) {
            for (var i = 0; i < data['pages'].length; i++) {
              this.enabledRoutes[data['pages'][i]['route']] = data['pages'][i]['isEnabled'];
            }
          }
        }
      },
      error => {
        // this.handleError('Error getting community information (e.g. pages,entities) for community with id: ' + this.communityId, error);
      }));
  }
}
