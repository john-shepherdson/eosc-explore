//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HtmlProjectReportModule  } from '../../openaireLibrary/landingPages/htmlProjectReport/htmlProjectReport.module';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {PreviousRouteRecorder} from '../../openaireLibrary/utils/piwik/previousRouteRecorder.guard';
import {IsRouteEnabled} from '../../openaireLibrary/error/isRouteEnabled.guard';
import { OpenaireHtmlProjectReportComponent } from './htmlProjectReport.component';
import {HtmlProjectReportRoutingModule} from './htmlProjectReport-routing.module';

@NgModule({
  imports: [HtmlProjectReportModule, HtmlProjectReportRoutingModule],
  declarations:[OpenaireHtmlProjectReportComponent],
  providers:[FreeGuard, PreviousRouteRecorder, IsRouteEnabled],
  exports:[OpenaireHtmlProjectReportComponent]
})
export class LibHtmlProjectReportModule { }
