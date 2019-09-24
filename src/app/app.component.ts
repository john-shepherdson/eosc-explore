import {Component} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

import {EnvProperties} from './openaireLibrary/utils/properties/env-properties';
import {MenuItem, RootMenuItem} from './openaireLibrary/sharedComponents/menu';
import {EnvironmentSpecificService} from './openaireLibrary/utils/properties/environment-specific.service';
import {HelperFunctions} from "./openaireLibrary/utils/HelperFunctions.class";
import {FilterInfo, PortalAggregators} from "./utils/aggregators";
import {UserManagementService} from "./openaireLibrary/services/user-management.service";
import {User} from "./openaireLibrary/login/utils/helper.class";

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  //encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-root',
  styles: [`
  `],
  template: `

    <navbar *ngIf="properties && loginCheck" portal="aggregator" [properties]=properties [onlyTop]=false [user]="user"
            [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems  
            [userMenu]="false" [community]="community" [showCommunityName]="true"></navbar>
    <div class="custom-main-content">
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
     <cookie-law *ngIf="isClient" position="bottom">
      OpenAIRE uses cookies in order to function properly.<br>
      Cookies are small pieces of data that websites store in your browser to allow us to give you the best browsing
      experience possible.
      By using the OpenAIRE portal you accept our use of cookies. <a
      href="//ec.europa.eu/ipg/basics/legal/cookies/index_en.htm" target="_blank"> Read more <span class="uk-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" icon="chevron-right"
                   ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>
              </span></a>
    </cookie-law>
    <bottom *ngIf="isClient && properties" [properties]=properties></bottom>

  `

})
export class AppComponent {
  isClient: boolean = false;
  menuItems: RootMenuItem [] = [
    {rootItem: new MenuItem("home", "Home", "", "/", false, [], null, {}), items: []},
    {
      rootItem: new MenuItem("search", "Search", "", "/search/find", false, [], null, {}),
      items: [new MenuItem("", "Publications", "", "/search/find/publications", false, [], [], {}),
        new MenuItem("", "Research Data", "", "/search/find/datasets", false, [], [], {}),
        new MenuItem("", "Software", "", "/search/find/software", false, [], [], {}),
        new MenuItem("", "Other Research Products", "", "/search/find/other", false, [], [], {}),
        new MenuItem("", "Projects", "", "/search/find/projects/", false, [], [], {}),
        new MenuItem("", "Content Providers", "", "/search/find/dataproviders", false, [], [], {}),
        new MenuItem("", "Organizations", "", "/search/find/organizations/", false, [], [], {})
      ]
    }
  ];
  community = null;


  properties: EnvProperties;
  user: User;
  loginCheck: boolean = false;
  constructor(private  route: ActivatedRoute, private propertiesService: EnvironmentSpecificService,
              private router: Router, private userManagementService: UserManagementService) {

    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {
        HelperFunctions.scroll();
      }
    });
  }

  ngOnInit() {
    let id = this.router.url;

    console.log("Id is:"+id);
    let agg:FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    if(agg){
      this.community = {id: agg.menuId, name: agg.title, logoUrl:agg.logoUrl};
    }

    if (typeof document !== 'undefined') {
      try {
        this.isClient = true;

      } catch (e) {
      }

    }
    this.propertiesService.loadEnvironment()
      .then(es => {
        this.propertiesService.setEnvProperties(es);
        this.properties = this.propertiesService.envSpecific;
        this.userManagementService.getUserInfo(this.properties.userInfoUrl).subscribe(user => {
          this.user = user;
          this.loginCheck = true;
          console.log(this.user)
        });
      }, error => {
        console.log("App couldn't fetch properties");
        console.log(error);

      });
  }
}
