import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";


@Component({
  selector: 'openaire-advanced-search-organizations',
  template: `
    <advanced-search-organizations  [customFilter]="customFilter">
    </advanced-search-organizations>

  `
})

export class OpenaireAdvancedSearchOrganizationsComponent {

  customFilter:SearchCustomFilter= new SearchCustomFilter();
  constructor () {
    this.customFilter.set("Country", "country", "CA" , "Canada");
  }
  ngOnInit() {

  }
}
