import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { OpenaireSearchDataprovidersToDepositComponent } from './searchDataprovidersToDeposit.component';

import {SearchDataprovidersToDepositRoutingModule} from './searchDataprovidersToDeposit-routing.module';
import {SearchDataprovidersToDepositModule} from '../openaireLibrary/deposit/searchDataprovidersToDeposit.module';
import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../openaireLibrary/error/isRouteEnabled.guard';
import {ZenodoCommunitiesServiceModule} from '../openaireLibrary/connect/zenodoCommunities/zenodo-communitiesService.module';
import {SearchZenodoCommunitiesServiceModule} from '../openaireLibrary/connect/zenodoCommunities/searchZenodoCommunitiesService.module';

import {CommunityService} from '../openaireLibrary/connect/community/community.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    SearchDataprovidersToDepositModule,
    SearchDataprovidersToDepositRoutingModule,
    ZenodoCommunitiesServiceModule, SearchZenodoCommunitiesServiceModule
  ],
  declarations: [
    OpenaireSearchDataprovidersToDepositComponent
  ],
  exports: [
    OpenaireSearchDataprovidersToDepositComponent,
  ],
  providers:    [PreviousRouteRecorder, IsRouteEnabled, CommunityService]
})
export class LibSearchDataprovidersToDepositModule { }
