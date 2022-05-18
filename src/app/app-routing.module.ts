import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {OpenaireErrorPageComponent} from './error/errorPage.component';
import {ConfigurationService} from "./openaireLibrary/utils/configuration/configuration.service";

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {
    path: 'search/result',
    loadChildren: () => import('./landingPages/result/libResult.module').then(m => m.LibResultModule), data: { showHeader: true}
  },
  {
    path: 'search/publication',
    loadChildren: () => import('./landingPages/publication/libPublication.module').then(m => m.LibPublicationModule), data: { showHeader: true}
  },
  {
    path: 'search/dataset',
    loadChildren: () => import('./landingPages/dataset/libDataset.module').then(m => m.LibDatasetModule), data: { showHeader: true}
  },
  {
    path: 'search/software',
    loadChildren: () => import('./landingPages/software/libSoftware.module').then(m => m.LibSoftwareModule), data: { showHeader: true}
  },
  {
    path: 'search/other',
    loadChildren: () => import('./landingPages/orp/libOrp.module').then(m => m.LibOrpModule), data: { showHeader: true}
  },
  {
    path: 'search/project',
    loadChildren: () => import('./landingPages/project/libProject.module').then(m => m.LibProjectModule), data: { showHeader: true}
  },
  {
    path: 'search/dataprovider',
    loadChildren: () => import('./landingPages/dataProvider/libDataProvider.module').then(m => m.LibDataProviderModule), data: { showHeader: true}
  },
  {
    path: 'search/service',
    loadChildren: () => import('./landingPages/service/libService.module').then(m => m.LibServiceModule), data: { showHeader: true}
  },
  {
    path: 'search/organization',
    loadChildren: () => import('./landingPages/organization/libOrganization.module').then(m => m.LibOrganizationModule), data: { showHeader: true}
  },
  {
    path: 'search/find',
    loadChildren: () => import('./searchPages/find/libSearch.module').then(m => m.LibMainSearchModule)
  },
  {
    path: 'search/find/research-outcomes',
    loadChildren: () => import('./searchPages/simple/searchResearchResults.module').then(m => m.OpenaireSearchResearchResultsModule)
  },
  {
    path: 'search/find/projects',
    loadChildren: () => import('./searchPages/simple/searchProjects.module').then(m => m.LibSearchProjectsModule)
  },
  {
    path: 'search/find/dataproviders',
    loadChildren: () => import('./searchPages/simple/searchDataProviders.module').then(m => m.LibSearchDataProvidersModule)
  },
  {
    path: 'search/find/services',
    loadChildren: () => import('./searchPages/simple/searchServices.module').then(m => m.LibSearchServicesModule)
  },
  {
    path: 'search/find/organizations',
    loadChildren: () => import('./searchPages/simple/searchOrganizations.module').then(m => m.LibSearchOrganizationsModule)
  },
  {
    path: 'search/advanced/research-outcomes',
    loadChildren: () => import('./searchPages/advanced/searchResearchResults.module').then(m => m.OpenaireAdvancedSearchResearchResultsModule)
  },
  {
    path: 'search/advanced/organizations',
    loadChildren: () => import('./searchPages/advanced/advancedSearchOrganizations.module').then(m => m.LibAdvancedSearchOrganizationsModule)
  },
  {
    path: 'search/advanced/dataproviders',
    loadChildren: () => import('./searchPages/advanced/advancedSearchDataProviders.module').then(m => m.LibAdvancedSearchDataProvidersModule)
  },
  {
    path: 'search/advanced/services',
    loadChildren: () => import('./searchPages/advanced/advancedSearchServices.module').then(m => m.LibAdvancedSearchServicesModule)
  },
  {
    path: 'search/advanced/projects',
    loadChildren: () => import('./searchPages/advanced/advancedSearchProjects.module').then(m => m.LibAdvancedSearchProjectsModule)
  },
  {
    path: 'project-report',
    loadChildren: () => import('./landingPages/htmlProjectReport/libHtmlProjectReport.module').then(m => m.LibHtmlProjectReportModule)
  },

  {path: 'user-info', loadChildren: () => import('./login/libUser.module').then(m => m.LibUserModule)},
  {path: 'error', component: OpenaireErrorPageComponent},
  {path: '**', pathMatch: 'full', component: OpenaireErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  subs = [];
  routes =[];
  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
  constructor( private config: ConfigurationService, private router: Router){
    this.subs.push(this.config.communityInformationState.subscribe(data => {
        if (data) {
          if (data['pages']) {
            for (var i = 0; i < data['pages'].length; i++) {
              this.routes[data['pages'][i]['route']] = data['pages'][i]['isEnabled'];
            }
          }
          this.getRoutes();
        }
      },
      error => {
        // this.handleError('Error getting community information (e.g. pages,entities) for community with id: ' + this.communityId, error);
      }));
  }
  getRoutes(){
    let optionalRoutes = [
      // Deposit Pages
  { path: 'participate/deposit-datasets',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-datasets-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-subject-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-publications',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  { path: 'participate/deposit-publications-result',  redirectTo: 'participate/deposit/learn-how', pathMatch: 'full'},
  
  { path: 'participate/deposit/learn-how', loadChildren: () => import('./deposit/deposit.module').then(m => m.LibDepositModule)},
  { path: 'participate/deposit/search', loadChildren: () => import('./deposit/searchDataprovidersToDeposit.module').then(m => m.LibSearchDataprovidersToDepositModule)},
  // Linking Pages
  { path: 'myclaims', loadChildren: () => import('./claims/myClaims/myClaims.module').then(m => m.LibMyClaimsModule)},
  { path: 'participate/claim', loadChildren: () => import('./claims/linking/linkingGeneric.module').then(m => m.LibLinkingGenericModule)},
  { path: 'participate/direct-claim', loadChildren: () => import('./claims/directLinking/directLinking.module').then(m => m.LibDirectLinkingModule)},
  {path: 'develop', loadChildren: () => import('./develop/develop.module').then(m => m.DevelopModule)}
  ];
    
    for (var i = 0; i <optionalRoutes.length; i++) {
      if(this.routes["/"+optionalRoutes[i].path]){
        this.router.config.push(optionalRoutes[i]);
      }
    }
    return routes;
  }
}
