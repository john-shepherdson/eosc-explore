import { NgModule}            from '@angular/core';
import { DataProviderModule } from '../../openaireLibrary/landingPages/dataProvider/dataProvider.module';
import { OpenaireDataProviderComponent } from './dataProvider.component';
import {DataProviderRoutingModule} from './dataProvider-routing.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [DataProviderModule, DataProviderRoutingModule],
  declarations:[OpenaireDataProviderComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireDataProviderComponent]
})
export class LibDataProviderModule { }
