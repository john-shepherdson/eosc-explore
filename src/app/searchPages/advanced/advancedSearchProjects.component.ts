import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-advanced-search-projects',
    template: `
    <search-projects [customFilter]="customFilter" [simpleView]="false">
    </search-projects>

    `
 })

export class OpenaireAdvancedSearchProjectsComponent {

  customFilter:SearchCustomFilter= null;
  constructor(private  route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
