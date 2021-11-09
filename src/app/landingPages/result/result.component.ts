import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-publication',
    template: `<result-landing type="result" [piwikSiteId]="piwikSiteId"></result-landing>`,
 })
export class OpenaireResultComponent{
  piwikSiteId = properties.piwikSiteId;

}
