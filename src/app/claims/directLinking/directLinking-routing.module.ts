import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireDirectLinkingComponent} from './directLinking.component';
import {LoginGuard} from '../../openaireLibrary/login/loginGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireDirectLinkingComponent, canActivate: [LoginGuard], data: {
          redirect: '/error',  community : 'openaire'
        }, canDeactivate: [PreviousRouteRecorder]},

    ])
  ]
})
export class DirectLinkingRoutingModule { }
