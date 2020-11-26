import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";

@Component({
    selector: 'openaire-advanced-search-projects',
    template: `
    <search-projects [customFilter]="customFilter" [simpleView]="false" [openaireLink]="'https://'+(properties.environment != 'production'?'beta.':'')+'explore.openaire.eu/search/advanced/projects'">
    </search-projects>

    `
 })

export class OpenaireAdvancedSearchProjectsComponent {

  customFilter:SearchCustomFilter= null;
  properties: EnvProperties;
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
