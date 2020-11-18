import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";

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
    let id = this.route.snapshot.paramMap.get('id');
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
