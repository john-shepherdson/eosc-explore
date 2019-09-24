import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OpenaireHtmlProjectReportComponent} from './htmlProjectReport.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
 imports: [
  RouterModule.forChild([
    { path: '', component: OpenaireHtmlProjectReportComponent , canActivate: [FreeGuard],canDeactivate: [PreviousRouteRecorder]}
  ])
]
})
export class HtmlProjectReportRoutingModule { }
