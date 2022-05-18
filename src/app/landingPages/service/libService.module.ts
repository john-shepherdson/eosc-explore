import { NgModule}            from '@angular/core';
import { DataProviderModule } from '../../openaireLibrary/landingPages/dataProvider/dataProvider.module';
import { OpenaireServiceComponent } from './service.component';
import {ServiceRoutingModule} from './service-routing.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [DataProviderModule, ServiceRoutingModule],
  declarations:[OpenaireServiceComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireServiceComponent]
})
export class LibServiceModule { }
