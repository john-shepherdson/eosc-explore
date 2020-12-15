import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {AggregatorInfo, PortalAggregators} from "../../utils/aggregators";
import {ConnectHelper} from "../../openaireLibrary/connect/connectHelper";
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";

@Component({
    selector: 'openaire-search-organizations',
    template: `

    <search-organizations [customFilter]="customFilter" [openaireLink]="'https://'+(properties.environment != 'production'?'beta.':'')+'explore.openaire.eu/search/find/organizations'">
    </search-organizations>

    `

})
export class OpenaireSearchOrganizationsComponent {
    customFilter:SearchCustomFilter= null;
    properties: EnvProperties;
    constructor ( ) {}
    ngOnInit() {
        this.properties = properties;
        let id = ConnectHelper.getCommunityFromDomain(properties.domain);
        let agg:AggregatorInfo = PortalAggregators.getFilterInfoByMenuId(id);
        this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    }
}
