import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-project',
    template: `<project [piwikSiteId]="piwikSiteId"></project>`,
 })
export class OpenaireProjectComponent{
  piwikSiteId = properties.piwikSiteId;

  constructor (  ) {

  }

  ngOnInit() {
}



}
