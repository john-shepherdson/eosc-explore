import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";

@Component({
  selector: 'openaire-search-dataproviders',
  template: `

    <search-dataproviders [customFilter]="customFilter" [openaireLink]="'https://'+(properties.environment != 'production'?'beta.':'')+'explore.openaire.eu/search/find/dataproviders'">
    </search-dataproviders>

  `
})
export class OpenaireSearchDataprovidersComponent {
  customFilter: SearchCustomFilter = null;
  properties: EnvProperties;
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
