import {NgModule} from '@angular/core';
import {HtmlProjectReportModule} from '../../openaireLibrary/landingPages/htmlProjectReport/htmlProjectReport.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {OpenaireHtmlProjectReportComponent} from './htmlProjectReport.component';
import {HtmlProjectReportRoutingModule} from './htmlProjectReport-routing.module';

@NgModule({
  imports: [HtmlProjectReportModule, HtmlProjectReportRoutingModule],
  declarations:[OpenaireHtmlProjectReportComponent],
  providers:[FreeGuard, PreviousRouteRecorder],
  exports:[OpenaireHtmlProjectReportComponent]
})
export class LibHtmlProjectReportModule { }
