import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
import { EnvironmentSpecificService} from './openaireLibrary/utils/properties/environment-specific.service';

import { OpenaireErrorPageComponent } from './error/errorPage.component';

const routes: Routes = [
  { path: '', loadChildren: './aggregator/aggregator.module#AggregatorModule'},
  { path: ':id', loadChildren: './aggregator/aggregator.module#AggregatorModule'},
  { path: 'error', component: OpenaireErrorPageComponent},
  { path: '**',pathMatch: 'full',component: OpenaireErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EnvironmentSpecificResolver, EnvironmentSpecificService]
})
export class AppRoutingModule { }
