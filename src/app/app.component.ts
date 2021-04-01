import {Component, Inject, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {EnvProperties} from './openaireLibrary/utils/properties/env-properties';
import {MenuItem, RootMenuItem} from './openaireLibrary/sharedComponents/menu';
import {AggregatorInfo, PortalAggregators} from "./utils/aggregators";
import {UserManagementService} from "./openaireLibrary/services/user-management.service";
import {User} from "./openaireLibrary/login/utils/helper.class";
import {Header} from "./openaireLibrary/sharedComponents/navigationBar.component";
import {portalProperties} from "../environments/environment-aggregator";
import {properties} from "../environments/environment";
import {ConnectHelper} from "./openaireLibrary/connect/connectHelper";
import {ConfigurationService} from "./openaireLibrary/utils/configuration/configuration.service";
import {Subscriber} from "rxjs";
import {DOCUMENT} from "@angular/common";

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
  agg: AggregatorInfo = null;
  subscriptions = [];
  
  constructor(private userManagementService: UserManagementService,  private configurationService: ConfigurationService,  @Inject(DOCUMENT) private document, private rendererFactory: RendererFactory2) {
    this.id = ConnectHelper.getCommunityFromDomain(this.properties.domain);
    this.agg = PortalAggregators.getFilterInfoByMenuId(this.id);
    this.setStyles();
    this.configurationService.initStaticCommunityInformation(PortalAggregators.getCommunityInfoByMenuId(this.id));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription instanceof Subscriber) {
        subscription.unsubscribe();
      }
    });
    this.configurationService.clearSubscriptions();
    this.userManagementService.clearSubscriptions();
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
    this.subscriptions.push(this.userManagementService.getUserInfo().subscribe(user => {
      this.user = user;
      this.loginCheck = true;
      this.userMenuItems = [];
      if (this.user) {
        this.userMenuItems.push(new MenuItem("", "My links", "", "/myclaims", false, [], [], {}));
        // this.userMenuItems.push(new MenuItem("", "User information", "", "/user-info", false, [], [], {}));
      }
    }));
  }
  
  private buildMenu() {
    this.menuItems = [
      {rootItem: new MenuItem("home", "Home", "", "/", false, [], null, {}), items: []},
      {
        rootItem: new MenuItem("search", "Search", "", "/search/find", false, [], ["/search/find"], {}),
        items: []
      },
      {
        rootItem: new MenuItem("deposit", "Deposit", "", "/participate/deposit/learn-how", false, [], ["/participate/deposit/learn-how"], {}),
        items: []
      },
      {
        rootItem: new MenuItem("link", "Link", "", "/participate/claim", false, [], ["/participate/claim"], {}),
        items: [new MenuItem("", "Start linking", "", "/participate/claim", false, [], ["/participate/claim"], {}),
          new MenuItem("", "Learn more", this.properties.claimsInformationLink, "", false, [], [], {})]
      },
      {
        rootItem: new MenuItem("develop", "Develop", "", "/develop", false, [], ["/develop"], {}),
        items: []
      }
    ];
    let params = {};
    // params[this.agg.queryFieldName] = this.agg.valueId;
    this.menuItems[1].items.push(new MenuItem("", "Research outcomes", "", "/search/find/research-outcomes", false, [], ["/search/find/research-outcomes"], params));
    this.menuItems[1].items.push(new MenuItem("", "Projects", "", "/search/find/projects", false, ["project"], ["/search/find/projects"], params));
    this.menuItems[1].items.push(new MenuItem("", "Content Providers", "", "/search/find/dataproviders", false, ["datasource"], ["/search/find/dataproviders"], params));
    this.menuItems[1].items.push(new MenuItem("", "Organizations", "", "/search/find/organizations", false, ["organization"], ["/search/find/organizations"], params));

  }
  setStyles(){
    let css:string =':root {\n';
    if(this.agg.mainColor){
      css = css.concat('--portal-main-color: ' + this.agg.mainColor + ';\n');
    }
    if(this.agg.darkColor){
      css = css.concat('--portal-dark-color: ' + this.agg.darkColor + ';\n');
    }
    if(this.agg.darkColor){
      css = css.concat("--graph-background:  url('" + this.agg.background + "\') no-repeat bottom;\n");
    }
    css = css.concat('}');

    try {
      if( this.document.getElementById('customStyle')){
        try {
          this.document.getElementById('customStyle').append(css);
        }catch(e){
          console.log("error with append style")
        }
      }else {
        const renderer = this.rendererFactory.createRenderer(this.document, {
          id: '-1',
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: {}
        });

        const head = this.document.head;
        if (head === null) {
          throw new Error('<head> not found within DOCUMENT.');
        }
        const style = renderer.createElement('style');
        renderer.setAttribute(style, "id", "customStyle");
        let CSSElement = renderer.createText(css);
        renderer.appendChild(head, style);
        renderer.appendChild(style, CSSElement);
      }
    } catch (e) {
      console.error('Renderrer Error to append style ', e);
    }
  }

}
