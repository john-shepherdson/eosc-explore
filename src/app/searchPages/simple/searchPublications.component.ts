import {Component, Input, ViewChild} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'openaire-search-publications',
    template: `

    <search-publications [customFilter]="customFilter">
    </search-publications>

    `

})
export class OpenaireSearchPublicationsComponent {

    customFilter:SearchCustomFilter= new SearchCustomFilter();
    constructor ( private  route: ActivatedRoute ) {
        
    }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        if(id && id.length > 0){
            this.customFilter.set("Country", "country", id , "");
        }else{
            this.customFilter.set("Country", "country", "CA" , "Canada");
        }
    }


}
