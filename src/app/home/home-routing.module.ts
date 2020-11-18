import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{HomeComponent} from './home.component';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: HomeComponent,canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class HomeRoutingModule { }
