import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DevelopComponent} from "./develop.component";
import {RouterModule} from "@angular/router";
import {PreviousRouteRecorder} from "../openaireLibrary/utils/piwik/previousRouteRecorder.guard";

@NgModule({
  declarations: [DevelopComponent],
  imports: [CommonModule, RouterModule.forChild([
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
