import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";

@Component({
  selector: 'openaire-advanced-search-software',
  template: `
    <advanced-search-software [customFilter]="customFilter">
    </advanced-search-software>

  `
})

export class OpenaireAdvancedSearchSoftwareComponent {

  customFilter:SearchCustomFilter= new SearchCustomFilter();
  constructor () {
    this.customFilter.set("Country", "country", "CA" , "Canada");
  }
  ngOnInit() {

  }
}
