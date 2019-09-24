import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'openaire-search-software',
    template: `
        <search-research-results resultType="software" [customFilter]="customFilter"></search-research-results>
    `
})

export class OpenaireSearchSoftwareComponent {
    customFilter:SearchCustomFilter= null;
    constructor ( private  route: ActivatedRoute ) {

    }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        let agg:FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
        this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    }

}
