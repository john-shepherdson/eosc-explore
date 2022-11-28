import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {OpenaireEntities} from "../../openaireLibrary/utils/properties/searchFields";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";


@Component({
  selector: 'openaire-advanced-search-service',
  template: `
    <search-dataproviders [simpleView]="false" 
                          [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false"
                          type="services" entityType="service" [typeName]="openaireEntities.SERVICES" 
                          [searchForm]="searchForm">
    </search-dataproviders>
  `
})

export class OpenaireAdvancedSearchServicesComponent {
  properties: EnvProperties;
  public openaireEntities = OpenaireEntities;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
  }
}
