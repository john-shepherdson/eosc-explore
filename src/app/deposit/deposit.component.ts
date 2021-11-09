import {Component} from '@angular/core';
import {properties} from "../../environments/environment";

@Component({
  selector: 'openaire-deposit',
  template: `    
    <deposit-first-page [piwikSiteId]="piwikSiteId"></deposit-first-page>
    `
})

export class OpenaireDepositComponent {
  piwikSiteId = properties.piwikSiteId;
    constructor() {
  }

  public ngOnInit() {}
}

