import {Component} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";

@Component({
    selector: 'openaire-search-software',
    template: `

    <search-software [customFilter]="customFilter">
    </search-software>
    `
})

export class OpenaireSearchSoftwareComponent {
    customFilter:SearchCustomFilter= new SearchCustomFilter();
    constructor () {
        this.customFilter.set("Country", "country", "CA" , "Canada");
    }
    ngOnInit() {

    }

}
