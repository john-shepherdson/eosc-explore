import {Component, Input, ViewChild} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";

@Component({
    selector: 'openaire-search-orps',
    template: `

    <search-orps [customFilter]="customFilter">
    </search-orps>
    `
})

export class OpenaireSearchOrpsComponent {
    customFilter:SearchCustomFilter= new SearchCustomFilter();
    constructor () {
        this.customFilter.set("Country", "country", "CA" , "Canada");
    }
    ngOnInit() {

    }
}
