import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-organization',
    template: `<organization [piwikSiteId]="piwikSiteId"></organization>`,
 })
export class OpenaireOrganizationComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
