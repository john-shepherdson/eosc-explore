import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-dataset',
    template: `<result-landing type="dataset" [piwikSiteId]="piwikSiteId"></result-landing>`,
 })
export class OpenaireDatasetComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
