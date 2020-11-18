import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchProjectsRoutingModule} from './searchProjects-routing.module';
import {OpenaireSearchProjectsComponent} from './searchProjects.component';

import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {SearchProjectsModule} from "../../openaireLibrary/searchPages/searchProjects.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, SearchProjectsRoutingModule, SearchProjectsModule

  ],
  declarations: [
    OpenaireSearchProjectsComponent
   ],
  providers:[PreviousRouteRecorder],
  exports: [
    OpenaireSearchProjectsComponent
     ]
})
export class LibSearchProjectsModule { }
