import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSoftwareComponent} from './software.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
 imports: [
  RouterModule.forChild([
    { path: '', component: OpenaireSoftwareComponent, canActivate: [FreeGuard],canDeactivate: [PreviousRouteRecorder]  }
  ])
]
})
export class SoftwareRoutingModule { }
