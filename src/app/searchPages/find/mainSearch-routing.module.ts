import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchComponent} from './search.component';
import {PreviousRouteRecorder} from "../../openaireLibrary/utils/piwik/previousRouteRecorder.guard";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchComponent,canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class MainSearchRoutingModule { }
