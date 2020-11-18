import {Component, Input} from '@angular/core';
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'openaire-search-results',
    template: `
      <search-research-results resultType="result" [simpleView]="false"></search-research-results>
    `

})
export class OpenaireSearchResearchResultsComponent {
    @Input() searchLink: string = "/search/advanced/research-results";
    customFilter:SearchCustomFilter= null;
    constructor(private  route: ActivatedRoute) {
    }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
        this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    }
}
