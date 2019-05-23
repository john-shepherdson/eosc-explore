import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import{ SearchOrpsRoutingModule} from './searchOrps-routing.module';
import{OpenaireSearchOrpsComponent} from './searchOrps.component';

import {SearchOrpsModule} from '../../openaireLibrary/searchPages/simple/searchOrps.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'


@NgModule({
  imports: [
    CommonModule, FormsModule,
  SearchOrpsModule , SearchOrpsRoutingModule

  ],
  declarations: [
    OpenaireSearchOrpsComponent
   ],
  providers:[FreeGuard,PreviousRouteRecorder, IsRouteEnabled],
  exports: [
    OpenaireSearchOrpsComponent
     ]
})
export class LibSearchOrpsModule { }
