import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";

@Component({
  selector: 'openaire-search-datasets',
  template: `

    <search-datasets [customFilter]="customFilter">
    </search-datasets>
  `
})

export class OpenaireSearchDatasetsComponent {
  customFilter: SearchCustomFilter = new SearchCustomFilter();

  constructor() {
    this.customFilter.set("Country", "country", "CA", "Canada");
  }

  ngOnInit() {

  }
}
