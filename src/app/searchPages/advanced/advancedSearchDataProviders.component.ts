import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {AggregatorInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";


@Component({
  selector: 'openaire-advanced-search-dataprovider',
  template: `
    <search-dataproviders [customFilter]="customFilter" [simpleView]="false" [openaireLink]="customFilter?'https://'+(properties.environment != 'production'?'beta.':'')+'explore.openaire.eu/search/advanced/dataproviders':null"
    [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false">
    </search-dataproviders>

  `
})

export class OpenaireAdvancedSearchDataProvidersComponent {
  customFilter: SearchCustomFilter = null;
  properties: EnvProperties;
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg: AggregatorInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
