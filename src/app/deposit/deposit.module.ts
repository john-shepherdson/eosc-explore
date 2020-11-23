import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';


import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../openaireLibrary/error/isRouteEnabled.guard';

import {OpenaireDepositComponent} from "./deposit.component";
import {DepositRoutingModule} from "./deposit-routing.module";
import {DepositFirstPageModule} from "../openaireLibrary/deposit/depositFirstPage.module";

import {ZenodoCommunitiesService} from "../openaireLibrary/connect/zenodoCommunities/zenodo-communities.service";
import {CommunityService} from "../openaireLibrary/connect/community/community.service";
import {SearchZenodoCommunitiesService} from "../openaireLibrary/connect/zenodoCommunities/searchZenodoCommunities.service";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    DepositRoutingModule, DepositFirstPageModule
  ],
  declarations: [
    OpenaireDepositComponent
  ],
  exports: [
    OpenaireDepositComponent,
  ],
  providers:    [PreviousRouteRecorder, IsRouteEnabled,
    ZenodoCommunitiesService, CommunityService, SearchZenodoCommunitiesService]
})
export class LibDepositModule { }
