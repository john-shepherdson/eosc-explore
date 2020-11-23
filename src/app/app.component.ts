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
import {properties} from "../environments/environment";
import {ConnectHelper} from "./openaireLibrary/connect/connectHelper";

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="agg">
      <navbar *ngIf="properties && loginCheck && header" portal="aggregator" [properties]=properties [onlyTop]=false
              [user]="user" [userMenuItems]="userMenuItems"
              [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems
              [userMenu]="true" [header]="header"></navbar>
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
    </div>
  `
  
})
export class AppComponent {
  isClient: boolean = false;
  menuItems: RootMenuItem [] = [];
  userMenuItems: MenuItem[] = [];
  community = null;
  id: string = null;
  properties: EnvProperties = properties;
  user: User;
  loginCheck: boolean = false;
  footer = portalProperties.sectionFooter;
  header: Header;
  agg: FilterInfo = null;
  
  constructor(private propertiesService: EnvironmentSpecificService,
              private userManagementService: UserManagementService) {
  }
  
  ngOnInit() {
    if (typeof document !== 'undefined') {
        this.isClient = true;
    }
    this.id = ConnectHelper.getCommunityFromDomain(this.properties.domain);
    this.agg = PortalAggregators.getFilterInfoByMenuId(this.id);
    if (this.agg) {
      this.header = {
        route: '/',
        url: null,
        title: this.agg.title,
        logoUrl: this.agg.logoUrl,
        logoSmallUrl: this.agg.logoUrl,
        position: 'left',
        badge: true
      };
      this.buildMenu();
    }
    this.userManagementService.getUserInfo().subscribe(user => {
      this.user = user;
      this.loginCheck = true;
      this.userMenuItems = [];
      if (this.user) {
        this.userMenuItems.push(new MenuItem("", "User information", "", "/user-info", false, [], [], {}));
      }
    });
  }
  
  private buildMenu() {
    this.menuItems = [
      {rootItem: new MenuItem("home", "Home", "", "/", false, [], null, {}), items: []},
      {
        rootItem: new MenuItem("search", "Search", "", "/search/find", false, [], null, {}),
        items: []
      },
      {
        rootItem: new MenuItem("deposit", "Deposit", "", "/participate/deposit/learn-how", false, [], null, {}),
        //rootItem: new MenuItem("deposit", "Deposit", "", "/participate/deposit/learn-how", false, [], ["/participate/deposit/learn-how"], {}),
        items: []
        //rootItem: new MenuItem("share", "Share", "", "", false, [], null, {}),
        //items: [new MenuItem("", "Publications", "", "/participate/deposit-publications", false, ["publication"], null, {}),
        //  new MenuItem("", "Research Data", "", "/participate/deposit-datasets", false, ["dataset"], null, {})]
      },
      {
        rootItem: new MenuItem("link", "Link", "", "/participate/claim", false, [], null, {}),
        items: [new MenuItem("", "Start linking", "", "/participate/claim", false, [], null, {}),
          new MenuItem("", "Learn more", this.properties.claimsInformationLink, "", false, [], [], {})]
      }
    ];
    let params = {};
    params[this.agg.queryFieldName] = this.agg.valueId;
    if ((portalProperties.entities.publication.isEnabled && portalProperties.entities.publication.simpleSearchPage) ||
      (portalProperties.entities.dataset.isEnabled && portalProperties.entities.dataset.simpleSearchPage) ||
      (portalProperties.entities.software.isEnabled && portalProperties.entities.software.simpleSearchPage) ||
      portalProperties.entities.other.isEnabled && portalProperties.entities.other.simpleSearchPage) {
      
      this.menuItems[1].items.push(new MenuItem("", "Research outcomes", "", "/search/find/research-outcomes", false, [], [], params))
    }
    
    if (portalProperties.entities.project.isEnabled && portalProperties.entities.project.simpleSearchPage) {
      this.menuItems[1].items.push(new MenuItem("", "Projects", "", "/search/find/projects/", false, [], [],
        {cf: true}))
    }
    if (portalProperties.entities.datasource.isEnabled && portalProperties.entities.datasource.simpleSearchPage) {
      this.menuItems[1].items.push(new MenuItem("", "Content Providers", "", "/search/find/dataproviders", false, [], [], params))
    }
    if (portalProperties.entities.organization.isEnabled && portalProperties.entities.organization.simpleSearchPage) {
      this.menuItems[1].items.push(new MenuItem("", "Organizations", "", "/search/find/organizations/", false, [], [], params))
    }
  }
}
