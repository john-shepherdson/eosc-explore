import {Component, ViewChild, ElementRef} from '@angular/core';
import {SearchCustomFilter} from "../../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'openaire-search-find',
    template: `
    <search-find logoURL = "/assets/common-assets/logo-small-aggregator.png" name="OpenAIRE" [customFilter]="customFilter"></search-find>
 
    `,
 })
export class OpenaireSearchComponent{
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
    this.route.data
      .subscribe((data: { envSpecific: any }) => {

        // this.piwikSiteId = PiwikHelper.siteIDs[communityId];
        // if(communityId){
        //   this.connectCommunityId = communityId
        // }else{
        //   this.route.queryParams.subscribe(data => {
        //
        //     if(data['communityId'] && data['communityId']!=""){
        //       this.connectCommunityId = data['communityId'];
        //       this.piwikSiteId = PiwikHelper.siteIDs[this.connectCommunityId];
        //     }
        //   });
        // }
      });
}



}
