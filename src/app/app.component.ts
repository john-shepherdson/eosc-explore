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
import {SmoothScroll} from "./openaireLibrary/utils/smooth-scroll";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="agg">
      <navbar *ngIf="properties && loginCheck && header && agg.menuId != 'eosc'" portal="aggregator" [properties]=properties [onlyTop]=false
              [user]="user" [userMenuItems]="userMenuItems"
              [communityId]="properties.adminToolsCommunity" [menuItems]=menuItems
              [userMenu]="agg.enableLogin" [header]="header"></navbar>
      <div class="custom-main-content">
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
      <cookie-law *ngIf="isClient && agg.menuId != 'eosc'" position="bottom">
        OpenAIRE uses cookies in order to function properly.<br>
        Cookies are small pieces of data that websites store in your browser to allow us to give you the best browsing
        experience possible.
        By using the OpenAIRE portal you accept our use of cookies. <a
          href="https://www.openaire.eu/privacy-policy#cookies" target="_blank"> Read more <span class="uk-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" icon="chevron-right"
                   ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>
              </span></a>
      </cookie-law>
      <bottom *ngIf="isClient && properties && agg.menuId != 'eosc'" [properties]=properties [centered]="true" [showMenuItems]="true" [menuItems]="[]" [darkBackground]="false" ></bottom>
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

  constructor(private userManagementService: UserManagementService,
              private configurationService: ConfigurationService, private smoothScroll: SmoothScroll,
              @Inject(DOCUMENT) private document, private rendererFactory: RendererFactory2) {
    this.id = ConnectHelper.getCommunityFromDomain(this.properties.domain);
    this.agg = PortalAggregators.getFilterInfoByMenuId(this.id);
    this.setStyles();
    this.configurationService.initStaticCommunityInformation(PortalAggregators.getCommunityInfoByMenuId(this.id));
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
        position:  this.agg.menuId == 'eosc'?'center':'left',
        menuPosition: this.agg.menuId == 'eosc'?'center':'right',
        badge: this.agg.menuId == 'eosc'?false:true
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
    let css2 = `

#searchImage{
background: url('https://marketplace.eosc-portal.eu/packs/media/images/eosc-logo-color-883f208671ef77b15b9cd067ecdc369b.png') no-repeat center left;
width: 250px;
height: 80px;
background-size: 250px 80px;
margin-left: 80px;
margin-bottom: 37px;
}
#searchForm advanced-search-form{
float:right;
}
#searchForm{
padding:0;
 width:100%;
  max-width:100%;
}
search-filter h6::after{
border-bottom: 1px solid gray;
}
search-filter h6{
text-transform: uppercase !important;
font-size: 12px;
}

search-filter .tm-child-list-divider > ul > li:nth-child(n+2), .uk-list-divider > li:nth-child(n+2){
border: none;
}

.filterHeader{
border-bottom:1px solid #ced4da;
}
.matSelection.mat-select {

    padding: 4px;
    border: 1px solid #ced4da;

}

  
 
.search-results .uk-card-default.uk-card-hover:hover{
    box-shadow: none;
}
.search-results .uk-card-default {
    border: 1px solid #ced4da;
    box-shadow:none;
}

element {

}
.uk-pagination > .uk-active > *, .uk-pagination > .uk-active > :hover {

   border-radius: 0px;
 

}
    .uk-button-primary:not(.uk-icon-button), .portal-button:not(.uk-icon-button) {
      color: #fff !important;
      background-color: #0c2bd5 !important;
      background-image: linear-gradient(135deg,#05cae7,#0c2bd5) !important;
      border:none !important;
     }
     
   .uk-button-primary:hover, .portal-button:hover:not(.uk-icon-button) {
       background: #0c2bd5 !important;
        border:none !important;
    }

       .search_box_bg .uk-button, #searchForm .uk-button, .search_box_bg .uk-button:hover, #searchForm .uk-button:hover {
      border-radius: 0px;
      margin-left: 0px !important;
      color: rgb(102, 102, 102) !important;
      background-color: #0c2bd5 !important;
      background-color: rgba(255, 255, 255, 1.0) !important;
      border: 1px solid rgba(0, 0, 0, 0.40) !important;
      background-image: none !important;

    }

    .uk-navbar-nav > li > a, .uk-navbar-dropdown-nav > li > a, .uk-navbar-dropdown-nav > li > a:focus, .uk-navbar-dropdown-nav > li > a:hover {
      color: #555 !important;
    }
    .uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a.uk-open, .uk-navbar-nav > li > a:focus {
      color: #555 ;
      outline: 0;
    }
    
.aggregator-menu .uk-navbar-nav>li {
 margin-right:20px
}
.aggregator-menu .uk-navbar-nav>li>a {
 padding:0
}

.navbar .nav > li > .dropdown-menu, .uk-navbar-dropdown{
background-color: white;
 color: #555;
}
 
.aggregator-menu .uk-navbar-dropdown li:before {
 bottom:0
} 
.navbar .nav>li>.dropdown-menu,
.uk-navbar-dropdown {
 padding:20px
}
 

/* .aggregator-menu .uk-navbar-dropdown li:active::before, .aggregator-menu .uk-navbar-dropdown li:focus::before, .aggregator-menu .uk-navbar-dropdown li:hover::before, .aggregator-menu .uk-navbar-nav > li > a:active::before, .aggregator-menu .uk-navbar-nav > li > a:focus::before, .aggregator-menu .uk-navbar-nav > li > a:hover::before {

    transform: scaleX(1);
    transform-origin: 0 50%;

}
.aggregator-menu .uk-navbar-dropdown li::before, .aggregator-menu .uk-navbar-nav > li > a::before {

    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 20px;
    z-index: 300;
    left: 0;
    background-color: #dc9d19;
    transform: scaleX(0);
    transition: transform .5s cubic-bezier(.7,0,.3,1);
    transform-origin: 100% 50%;

}*/
 

    `;
    if(this.agg.menuId == 'eosc') {
      css = css.concat(css2);
    }
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
