import {Component, Input, ViewChild} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";

@Component({
    selector: 'openaire-search-organizations',
    template: `

    <search-organizations [customFilter]="customFilter">
    </search-organizations>

    `

})
export class OpenaireSearchOrganizationsComponent {
    customFilter:SearchCustomFilter= new SearchCustomFilter();
    constructor () {
        this.customFilter.set("Country", "country", "CA" , "Canada");
    }
    ngOnInit() {

    }
}
