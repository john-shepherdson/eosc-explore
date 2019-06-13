import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/observable/zip";
import {EnvProperties} from '../openaireLibrary/utils/properties/env-properties';
import {FilterInfo, PortalAggregators} from "../utils/aggregators";
import {MenuItem, RootMenuItem} from "../openaireLibrary/sharedComponents/menu";

@Component({
  selector: 'aggNavbar',
  templateUrl: `
<navbar *ngIf="properties" portal="aggregator" [environment]=properties.environment [onlyTop]=false
            [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems
            [APIUrl]="properties.adminToolsAPIURL" [logInUrl]="properties.loginUrl"
            [logOutUrl]="properties.logoutUrl" [cookieDomain]="properties.cookieDomain" [userMenu]="false" [community]="community" [showCommunityName]="true"></navbar>
`,
})
export class AggregatorNavBarComponent {

  properties: EnvProperties;
  menuItems: RootMenuItem [] = [
    {rootItem: new MenuItem("home", "Home", "", "/", false, [], null, {}), items: []},
    {
      rootItem: new MenuItem("search", "Search", "", "/search/find", false, [], ["/search/find"], {}),
      items: [new MenuItem("", "Publications", "", "/search/find/publications", false, ["publication"], ["/search/find/publications"], {}),
        new MenuItem("", "Research Data", "", "/search/find/datasets", false, ["dataset"], ["/search/find/datasets"], {}),
        new MenuItem("", "Software", "", "/search/find/software", false, ["software"], ["/search/find/software"], {}),
        new MenuItem("", "Other Research Products", "", "/search/find/other", false, ["orp"], ["/search/find/other"], {}),
        // new MenuItem("", "Projects", "", "/search/find/projects/", false, ["project"], ["/search/find/projects"], {}),
        // new MenuItem("", "Content Providers", "", "/search/find/dataproviders", false, ["datasource"], ["/search/find/dataproviders"], {}),
        new MenuItem("", "Organizations", "", "/search/find/organizations/", false, ["organization"], ["/search/find/organizations"], {})
      ]
    }
  ];
  community = {id: "CA", name: "Canada Aggregator", logoUrl:"assets/common-assets/logo-small-aggregator.png"};


  constructor(
    private route: ActivatedRoute,

  ) {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    let agg:FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    // this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    // console.log(this.customFilter);



  }

  public ngOnInit() {

    this.route.data
      .subscribe((data: { envSpecific: EnvProperties }) => {
        this.properties = data.envSpecific;



      });

  }

}
