import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {AggregatorInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-search-find',
    template: `
    <search-all logoURL = "/assets/common-assets/logo-small-aggregator.png" name="OpenAIRE" [customFilter]="customFilter"></search-all>
    `,
 })
export class OpenaireSearchComponent{
  customFilter:SearchCustomFilter= null;
  constructor ( ) {}
  ngOnInit() {
    let id = ConnectHelper.getCommunityFromDomain(properties.domain);
    let agg:AggregatorInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);

}



}
