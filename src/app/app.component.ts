import {Component, Inject, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {EnvProperties} from './openaireLibrary/utils/properties/env-properties';
import {MenuItem} from './openaireLibrary/sharedComponents/menu';
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
import {SmoothScroll} from "./openaireLibrary/utils/smooth-scroll";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {OpenaireEntities} from "./openaireLibrary/utils/properties/searchFields";

@Component({
  selector: 'app-root',
  template: `
    <div id="modal-container"></div>
    <div *ngIf="agg">
      <navbar *ngIf="properties && loginCheck && header && showHeader" portal="eosc" [properties]=properties [onlyTop]=false
              [user]="user" [userMenuItems]="userMenuItems"
              [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems
              [userMenu]="agg.enableLogin" [header]="header"></navbar>
      <div class="custom-main-content">
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class AppComponent {
  isClient: boolean = false;
  menuItems: MenuItem [] = [];
  userMenuItems: MenuItem[] = [];
  community = null;
  properties: EnvProperties = properties;
  user: User;
  loginCheck: boolean = false;
  footer = portalProperties.sectionFooter;
  header: Header;
  showHeader;
  agg: AggregatorInfo = null;
  subscriptions = [];

  constructor(private userManagementService: UserManagementService,
              private configurationService: ConfigurationService, private smoothScroll: SmoothScroll,
              @Inject(DOCUMENT) private document, private rendererFactory: RendererFactory2,  private router: Router, private route: ActivatedRoute) {
    this.agg = PortalAggregators.eoscInfo;
    this.setStyles();
    this.configurationService.initStaticCommunityInformation(PortalAggregators.getCommunityInfo());
    this.showHeader = this.agg.showHeaderAlways;
  }

  ngOnInit() {
    this.subscriptions.push(this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let r = this.route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        this.showHeader = (r.snapshot.data.showHeader == true || this.agg.showHeaderAlways);
      }
    }));
    if (typeof document !== 'undefined') {
        this.isClient = true;
    }
    this.agg = PortalAggregators.eoscInfo;
    if (this.agg) {
      this.header = {
        route: '/',
        url: null,
        title: this.agg.title,
        logoUrl: this.agg.logoUrl,
        logoSmallUrl: this.agg.logoUrl,
        position:  'center',
        menuPosition: 'center',
        badge: false,
        darkBg: true
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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription instanceof Subscriber) {
        subscription.unsubscribe();
      }
    });
    this.configurationService.clearSubscriptions();
    this.userManagementService.clearSubscriptions();
    this.smoothScroll.clearSubscriptions();
  }

  private buildMenu() {
    this.menuItems = [
      new MenuItem("home", "Home", "", "/", false, [], null, {}),
      new MenuItem("search", "Search", "", "/search/find", false, [], ["/search/find"], {}),
      new MenuItem("deposit", "Deposit", "", "/participate/deposit/learn-how", false, [], ["/participate/deposit/learn-how"], {}),
      new MenuItem("link", "Link", "", "/participate/claim", false, [], ["/participate/claim"], {},
        null, null, null, null, "_blank", "internal", false,
        [
          new MenuItem("", "Start linking", "", "/participate/claim", false, [], ["/participate/claim"], {}),
          new MenuItem("", "Learn more", this.properties.claimsInformationLink, "", false, [], [], {})
        ]
      ),
      new MenuItem("develop", "Develop", "", "/develop", false, [], ["/develop"], {})
    ];
    let params = {};
    // params[this.agg.queryFieldName] = this.agg.valueId;
    this.menuItems[1].items.push(new MenuItem("", OpenaireEntities.RESULTS, "", properties.searchLinkToResults, false, [], ["/search/find/research-outcomes"], params));
    this.menuItems[1].items.push(new MenuItem("", OpenaireEntities.PROJECTS, "", properties.searchLinkToProjects, false, ["project"], ["/search/find/projects"], params));
    this.menuItems[1].items.push(new MenuItem("", OpenaireEntities.DATASOURCES, "", properties.searchLinkToDataProviders, false, ["datasource"], ["/search/find/dataproviders"], params));
    this.menuItems[1].items.push(new MenuItem("", OpenaireEntities.SERVICES, "", properties.searchLinkToServices, false, ["service"], ["/search/find/services"], params));
    this.menuItems[1].items.push(new MenuItem("", OpenaireEntities.ORGANIZATIONS, "", properties.searchLinkToOrganizations, false, ["organization"], ["/search/find/organizations"], params));

  }
  setStyles(){
    let css:string = this.agg.customCss;
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
