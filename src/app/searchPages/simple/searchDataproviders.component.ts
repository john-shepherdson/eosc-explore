import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-dataproviders',
  template: `
    <search-dataproviders [hasPrefix]="false" [searchForm]="searchForm"></search-dataproviders>
  `
})
export class OpenaireSearchDataprovidersComponent {
  properties: EnvProperties;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
  }
}
