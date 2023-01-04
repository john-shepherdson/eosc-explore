import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-find',
  template: `
    <search-all logoURL="/assets/common-assets/logo-small-aggregator.png" name="OpenAIRE" [piwikSiteId]="piwikSiteId" 
                [searchForm]="searchForm"></search-all>
  `,
 })
export class OpenaireSearchComponent{
  piwikSiteId = properties.piwikSiteId;
  public searchForm: SearchForm = {class: 'search-form', dark: true};
  constructor ( ) {}
  ngOnInit() {}
}
