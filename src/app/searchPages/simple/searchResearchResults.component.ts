import {Component, Input} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-results',
  template: `
    <search-research-results resultType="result" [stickyForm]="false"
                             [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false" [searchForm]="searchForm"></search-research-results>
  `
})
export class OpenaireSearchResearchResultsComponent {
  @Input() searchLink: string = "/search/research-results";
  properties: EnvProperties;
  public searchForm: SearchForm = {class: 'search-form', dark: false};
  constructor ( ) {}
  ngOnInit() {
    this.properties = properties;
  }
}
