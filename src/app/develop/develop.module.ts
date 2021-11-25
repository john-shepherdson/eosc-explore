import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DevelopComponent} from "./develop.component";
import {RouterModule} from "@angular/router";
import {PreviousRouteRecorder} from "../openaireLibrary/utils/piwik/previousRouteRecorder.guard";
import {PiwikServiceModule} from "../openaireLibrary/utils/piwik/piwikService.module";

@NgModule({
  declarations: [DevelopComponent],
  imports: [CommonModule,PiwikServiceModule, RouterModule.forChild([
    {
      path: '',
      component: DevelopComponent,
      canDeactivate: [PreviousRouteRecorder]
    },
  ])],
  exports: [DevelopComponent]
})
export class DevelopModule {

}
