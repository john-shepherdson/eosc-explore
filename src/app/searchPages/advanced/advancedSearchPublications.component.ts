import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";


@Component({
    selector: 'openaire-advanced-search-publications',
    template: `
    <advanced-search-publications [customFilter]="customFilter">
    </advanced-search-publications>
    `
 })

export class OpenaireAdvancedSearchPublicationsComponent {
  customFilter:SearchCustomFilter= new SearchCustomFilter();
  constructor () {
    this.customFilter.set("Country", "country", "CA" , "Canada");
  }
  ngOnInit() {

  }
}
