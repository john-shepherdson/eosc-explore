import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-software',
    template: `<result-landing type="software" [piwikSiteId]="piwikSiteId"></result-landing>`,
 })
export class OpenaireSoftwareComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {
  }

  ngOnInit() {
}



}
