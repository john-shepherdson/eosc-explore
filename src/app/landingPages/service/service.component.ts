import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-dataprovider',
    template: `<dataprovider type="service" [piwikSiteId]="piwikSiteId"></dataprovider>`,
 })
export class OpenaireServiceComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
