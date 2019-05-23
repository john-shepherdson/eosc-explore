import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {OpenaireUserComponent } from './user.component';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OpenaireUserComponent, canDeactivate: [PreviousRouteRecorder]},

    ])
  ]
})
export class UserRoutingModule { }
