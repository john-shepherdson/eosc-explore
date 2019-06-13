import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";

@Component({
  selector: 'openaire-advanced-search-software',
  template: `
    <advanced-search-software [customFilter]="customFilter">
    </advanced-search-software>

  `
})

export class OpenaireAdvancedSearchSoftwareComponent {

  customFilter:SearchCustomFilter= null;
  constructor(private  route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
  }
}
