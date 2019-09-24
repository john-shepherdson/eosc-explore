import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{OpenaireSearchComponent} from './search.component';
import {FreeGuard} from "../../openaireLibrary/login/freeGuard.guard";
import {PreviousRouteRecorder} from "../../openaireLibrary/utils/piwik/previousRouteRecorder.guard";


@NgModule({
  imports: [
    RouterModule.forChild([
     	{ path: '', component: OpenaireSearchComponent, canActivate: [FreeGuard], canDeactivate: [PreviousRouteRecorder] }

    ])
  ]
})
export class MainSearchRoutingModule { }
