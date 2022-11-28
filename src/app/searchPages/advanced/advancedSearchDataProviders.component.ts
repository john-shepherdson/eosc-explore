import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";


@Component({
  selector: 'openaire-advanced-search-dataprovider',
  template: `
    <search-dataproviders [simpleView]="false" 
                          [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false" [searchForm]="searchForm">
    </search-dataproviders>

  `
})

export class OpenaireAdvancedSearchDataProvidersComponent {
  properties: EnvProperties;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
  }
}
