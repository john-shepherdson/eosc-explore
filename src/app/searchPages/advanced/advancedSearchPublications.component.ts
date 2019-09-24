import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";


@Component({
    selector: 'openaire-advanced-search-publications',
    template: `
      <advanced-search-research-results  [customFilter]="customFilter" resultType="publication"></advanced-search-research-results>
    `
 })

export class OpenaireAdvancedSearchPublicationsComponent {
  customFilter:SearchCustomFilter= null;
  constructor(private  route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
