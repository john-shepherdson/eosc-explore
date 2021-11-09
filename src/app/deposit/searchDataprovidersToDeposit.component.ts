import {Component} from '@angular/core';
import {properties} from "../../environments/environment";

@Component({
  selector: 'openaire-search-deposit',
  template: `
    <deposit-search-dataproviders [piwikSiteId]="piwikSiteId"></deposit-search-dataproviders>
    `
})

export class OpenaireSearchDataprovidersToDepositComponent {
  piwikSiteId = properties.piwikSiteId;

  constructor() {}

  public ngOnInit() {}
}

