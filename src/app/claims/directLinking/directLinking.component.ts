import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
  selector: 'openaire-directLinking',
  template: `
    <directLinking [piwikSiteId]="piwikSiteId"></directLinking>`
})
export class OpenaireDirectLinkingComponent {
  piwikSiteId = properties.piwikSiteId;

}
