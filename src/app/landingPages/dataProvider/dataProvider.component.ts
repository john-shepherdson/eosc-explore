import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-dataprovider',
    template: `<dataprovider [piwikSiteId]="piwikSiteId"></dataprovider>`,
 })
export class OpenaireDataProviderComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
