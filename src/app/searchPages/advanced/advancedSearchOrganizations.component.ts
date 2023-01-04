import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";


@Component({
  selector: 'openaire-advanced-search-organizations',
  template: `
    <search-organizations  [simpleView]="false" 
                           [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false" [searchForm]="searchForm">
    </search-organizations>

  `
})

export class OpenaireAdvancedSearchOrganizationsComponent {
  properties: EnvProperties;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
  }
}
