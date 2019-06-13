import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";
import {FilterInfo, PortalAggregators} from "../../utils/aggregators";

@Component({
    selector: 'openaire-search-find',
    template: `
    <search-find logoURL = "/assets/common-assets/logo-small-aggregator.png" name="OpenAIRE" [customFilter]="customFilter"></search-find>
 
    `,
 })
export class OpenaireSearchComponent{
  customFilter:SearchCustomFilter= null;
  constructor ( private  route: ActivatedRoute ) {


  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let agg:FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    this.route.data
      .subscribe((data: { envSpecific: any }) => {

      });
}



}
