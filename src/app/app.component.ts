import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';

import {EnvProperties} from './openaireLibrary/utils/properties/env-properties';
import {MenuItem, RootMenuItem} from './openaireLibrary/sharedComponents/menu';
import {EnvironmentSpecificService} from './openaireLibrary/utils/properties/environment-specific.service';
import {HelperFunctions} from "./openaireLibrary/utils/HelperFunctions.class";
import {FilterInfo, PortalAggregators} from "./utils/aggregators";
import {UserManagementService} from "./openaireLibrary/services/user-management.service";
import {User} from "./openaireLibrary/login/utils/helper.class";
import {Header} from "./openaireLibrary/sharedComponents/navigationBar.component";
import {portalProperties} from "../environments/environment-aggregator";

@Component({
  //changeDetection: ChangeDetectionStrategy.Default,
  //encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-root',
  styles: [`
  `],
  template: `

    <navbar *ngIf="properties && loginCheck && header" portal="aggregator" [properties]=properties [onlyTop]=false [user]="user"
            [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems
            [userMenu]="true"    [header]="header"></navbar>
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
      items: [new MenuItem("", "Research outcomes", "", "/search/find/research-outcomes", false, [], [], {}),
        new MenuItem("", "Projects", "", "/search/find/projects/", false, [], [], {}),
        new MenuItem("", "Content Providers", "", "/search/find/dataproviders", false, [], [], {}),
        new MenuItem("", "Organizations", "", "/search/find/organizations/", false, [], [], {})
      ]
    }
  ];
  community = null;
  id: string = null;


  properties: EnvProperties;
  user: User;
  loginCheck: boolean = false;
  footer=portalProperties.sectionFooter;
  header:Header;
  constructor(private  route: ActivatedRoute, private propertiesService: EnvironmentSpecificService,
              private router: Router, private userManagementService: UserManagementService) {

    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {
        HelperFunctions.scroll();
      } else if (event instanceof NavigationEnd) {
        let r = this.route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        r.params.subscribe(params => {
          if(!this.id) {
            this.id = params['id'];
            let agg: FilterInfo = PortalAggregators.getFilterInfoByMenuId(this.id);
            if (agg) {
              this.header = {
                route: '/',
                url: null,
                title: agg.title,
                logoUrl:   agg.logoUrl,
                logoSmallUrl:  agg.logoUrl,
                position: 'left',
                badge: true
              };

            }
            if (this.id) {
              this.buildMenu();
            }
          } else {
            if(this.router.url === '/') {
              this.router.navigate([this.id]);
            }
          }
        });
      }
    });
  }

  private buildMenu() {
    this.menuItems = [
      {rootItem: new MenuItem("home", "Home", "", "/" + this.id, false, [], null, {}), items: []},
      {
        rootItem: new MenuItem("search", "Search", "", "/" + this.id + "/search/find", false, [], null, {}),
        items: []
      }
    ];
    if((portalProperties.entities.publication.isEnabled && portalProperties.entities.publication.simpleSearchPage) ||
      (portalProperties.entities.dataset.isEnabled && portalProperties.entities.dataset.simpleSearchPage) ||
      (portalProperties.entities.software.isEnabled && portalProperties.entities.software.simpleSearchPage) ||
      portalProperties.entities.other.isEnabled && portalProperties.entities.other.simpleSearchPage){

      this.menuItems[1].items.push(new MenuItem("", "Research outcomes", "", "/" + this.id + "/search/find/research-outcomes", false, [], [], {}))
    }

    if(portalProperties.entities.project.isEnabled && portalProperties.entities.project.simpleSearchPage){
      this.menuItems[1].items.push(new MenuItem("", "Projects", "", "/" + this.id + "/search/find/projects/", false, [], [], {}))
    }
    if(portalProperties.entities.datasource.isEnabled && portalProperties.entities.datasource.simpleSearchPage){
      this.menuItems[1].items.push(new MenuItem("", "Content Providers", "", "/" + this.id + "/search/find/dataproviders", false, [], [], {}))
    }
    if(portalProperties.entities.organization.isEnabled && portalProperties.entities.organization.simpleSearchPage){
      this.menuItems[1].items.push(new MenuItem("", "Organizations", "", "/" + this.id + "/search/find/organizations/", false, [], [], {}))
    }



  }

  ngOnInit() {
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
        this.userManagementService.getUserInfo().subscribe(user => {
          this.user = user;
          this.loginCheck = true;
        });
      }, error => {
        console.log("App couldn't fetch properties");
        console.log(error);

      });
  }
}
