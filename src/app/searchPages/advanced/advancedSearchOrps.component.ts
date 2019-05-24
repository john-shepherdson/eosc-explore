import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";


@Component({
    selector: 'openaire-advanced-search-orps',
    template: `
    <advanced-search-orps [customFilter]="customFilter">
    </advanced-search-orps>

    `
 })

export class OpenaireAdvancedSearchOrpsComponent {
  customFilter:SearchCustomFilter= new SearchCustomFilter();
  constructor () {
    this.customFilter.set("Country", "country", "CA" , "Canada");
  }
  ngOnInit() {

  }

}
