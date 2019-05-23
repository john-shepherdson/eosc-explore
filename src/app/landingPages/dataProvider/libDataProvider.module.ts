//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { DataProviderModule } from '../../openaireLibrary/landingPages/dataProvider/dataProvider.module';
import { OpenaireDataProviderComponent } from './dataProvider.component';
import {DataProviderRoutingModule} from './dataProvider-routing.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard'

@NgModule({
  imports: [DataProviderModule, DataProviderRoutingModule],
  declarations:[OpenaireDataProviderComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireDataProviderComponent]
})
export class LibDataProviderModule { }
