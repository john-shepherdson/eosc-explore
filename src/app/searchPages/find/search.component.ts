import {Component} from '@angular/core';
import {SearchForm} from "../../openaireLibrary/searchPages/searchUtils/newSearchPage.component";

@Component({
  selector: 'openaire-search-find',
  template: `
    <search-all logoURL="/assets/common-assets/logo-small-aggregator.png" name="OpenAIRE"
                [searchForm]="searchForm"></search-all>
  `,
 })
export class OpenaireSearchComponent{
  public searchForm: SearchForm = {class: 'search-form', dark: true};
}
