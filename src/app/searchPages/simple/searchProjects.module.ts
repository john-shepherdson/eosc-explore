import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchProjectsRoutingModule} from './searchProjects-routing.module';
import {OpenaireSearchProjectsComponent} from './searchProjects.component';

import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchProjectsModule} from '../../openaireLibrary/searchPages/simple/searchProjects.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchProjectsRoutingModule, SearchProjectsModule

  ],
  declarations: [
    OpenaireSearchProjectsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder],
  exports: [
    OpenaireSearchProjectsComponent
     ]
})
export class LibSearchProjectsModule { }
