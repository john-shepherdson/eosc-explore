import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-htmlProjectReport',
    template: `<htmlProjectReport [piwikSiteId]=""></htmlProjectReport>`,
 })
export class OpenaireHtmlProjectReportComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
