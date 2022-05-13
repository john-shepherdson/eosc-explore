import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {AggregatorInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {OpenaireEntities} from "../../openaireLibrary/utils/properties/searchFields";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-services',
  template: `

    <search-dataproviders [customFilter]="customFilter" [openaireLink]="customFilter?'https://'+(properties.environment != 'production'?'beta.':'')+'explore.openaire.eu/search/find/services':null"
                          [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false"
                          type="services" entityType="service" [typeName]="openaireEntities.SERVICES" 
                          [searchForm]="searchForm">
    </search-dataproviders>

  `
})
export class OpenaireSearchServicesComponent {
  customFilter: SearchCustomFilter = null;
  properties: EnvProperties;
  public openaireEntities = OpenaireEntities;
  public searchForm: SearchForm = {class: 'search-form', dark: false};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg: AggregatorInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
