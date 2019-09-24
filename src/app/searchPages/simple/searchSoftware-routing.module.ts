import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireSearchSoftwareComponent} from './searchSoftware.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchSoftwareComponent, canActivate: [FreeGuard], canDeactivate: [PreviousRouteRecorder]  }

    ])
  ]
})
export class SearchSoftwareRoutingModule { }
