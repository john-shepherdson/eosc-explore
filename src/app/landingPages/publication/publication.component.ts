import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
  selector: 'openaire-publication',
  template: `
    <result-landing type="publication" [piwikSiteId]="piwikSiteId"></result-landing>`,
})
export class OpenairePublicationComponent {
  piwikSiteId = properties.piwikSiteId;


  constructor() {}

  ngOnInit() {
  }


}
