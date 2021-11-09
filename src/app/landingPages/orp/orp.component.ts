import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-orp',
    template: `<result-landing type="orp" [piwikSiteId]="piwikSiteId"></result-landing>`,
 })
export class OpenaireOrpComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
