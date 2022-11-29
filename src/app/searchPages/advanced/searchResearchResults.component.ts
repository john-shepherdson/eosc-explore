import {Component, Input} from '@angular/core';
import {properties} from "../../../environments/environment";
import {EnvProperties} from "../../openaireLibrary/utils/properties/env-properties";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-results',
  template: `
    <search-research-results resultType="result" [simpleView]="false"
                             [piwikSiteId]="properties.piwikSiteId" [hasPrefix]="false" [searchForm]="searchForm"></search-research-results>
  `

})
export class OpenaireSearchResearchResultsComponent {
  @Input() searchLink: string = "/search/advanced/research-results";
  properties: EnvProperties;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
    ngOnInit() {
        this.properties = properties;
    }
}
