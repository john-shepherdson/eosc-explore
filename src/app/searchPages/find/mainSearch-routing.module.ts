import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchComponent} from './search.component';
// import {FreeGuard} from'../../login/freeGuard.guard';
// import {PreviousRouteRecorder} from '../../utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireSearchComponent }
     // 	{ path: '', component: OpenaireSearchComponent, canActivate: [FreeGuard], canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class MainSearchRoutingModule { }
