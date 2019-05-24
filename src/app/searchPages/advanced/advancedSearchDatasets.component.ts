import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";


@Component({
  selector: 'openaire-advanced-search-datasets',
  template: `
    <advanced-search-datasets  [customFilter]="customFilter">
    </advanced-search-datasets>

  `
})

export class OpenaireAdvancedSearchDatasetsComponent {
  customFilter:SearchCustomFilter= new SearchCustomFilter();
  constructor () {
    this.customFilter.set("Country", "country", "CA" , "Canada");
  }
  ngOnInit() {

  }

}
