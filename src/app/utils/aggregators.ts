import {SearchCustomFilter} from "../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {Portal} from "../openaireLibrary/utils/entities/adminTool/portal";

export class AggregatorInfo {
  menuId: string;
  title: string;
  logoUrl: string;
  fieldName: string; //Country
  queryFieldName: string; //country
  valueId: string; //gr
  valueName: string; // Greece
  graphSectionTitle: string;
  graphSectionText: string;
  enableLogin: boolean;
  customCss:string;
  showHeaderAlways:boolean;

  constructor(menuId: string, title: string, logoUrl: string, fieldName: string, queryFieldName: string, valueId: string,
              valueName: string, graphSectionTitle: string = null, graphSectionText:string = null, enableLogin:boolean = true, showHeaderAlways:boolean = true, customCss:string = "" ) {
    this.menuId = menuId;
    this.title = title;
    this.logoUrl = logoUrl;
    this.fieldName = fieldName;
    this.queryFieldName = queryFieldName;
    this.valueId = valueId;
    this.valueName = valueName;
    this.graphSectionTitle = graphSectionTitle;
    this.graphSectionText = graphSectionText;
    this.enableLogin = enableLogin;
    this.showHeaderAlways = showHeaderAlways;
    this.customCss = customCss;
  }
}

export class PortalAggregators {
  static eoscInfo: AggregatorInfo =
    new AggregatorInfo("eosc", "Eosc Explore", "https://providers.eosc-portal.eu/assets/images/EOSC_Portal_Logo.png",
       null, null, null,    null,null,null ,false,false,
      `
 :root {
  --primary-color: #3540b6;
  --primary-dark-color: #233d4c;
  --search-form-background: transparent;

  }        
  .search-input {
    --search-input-border-radius: 0px;
  }
  .input-wrapper.advanced-search {
    --input-border-radius: 0px;
  }
  .input-wrapper {
  --input-border-radius: 0px;
  }
  a, .uk-link, a.uk-link-heading{
  color: #3540b6;
  }
  a:hover, .uk-link:hover, a.uk-link-heading:hover{
  color: #233d4c;
 text-decoration: none;
  }
  .uk-link-text a:hover, .uk-link-toggle:hover .uk-link-text, a.uk-link-text:hover{
  color:#0c2bd5;
  }
.search_box_bg {
  /*background: url(//marketplace.eosc-portal.eu/packs/media/images/home-bg-89b63b3d579f3530ec6283f51e1648bc.png) no-repeat;*/
    /* background-position-x: 0%;*/
    /* background-position-y: 0%;*/
  /* background-position: 50% -120px;*/
  z-index: 3;
}
#searchImage{
background: url('https://marketplace.eosc-portal.eu/packs/media/images/eosc-logo-color-883f208671ef77b15b9cd067ecdc369b.png') no-repeat center left;
width: 250px;
height: 80px;
background-size: 250px 80px;
/*margin-left: 80px;*/
}
#searchForm advanced-search-form{
float:right;
}
#searchForm{
/*padding:0;*/
 /*width:100%;*/
  /*max-width:100%;*/
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

       .search_box_bg .uk-button, #searchForm .uk-button:not(.uk-button-text):not(.uk-button-link), .search_box_bg .uk-button:hover, #searchForm .uk-button:hover:not(.uk-button-text):not(.uk-button-link) {
      border-radius: 0px;
      margin-left: 0px !important;
      color: rgb(102, 102, 102) !important;
      background-color: #0c2bd5 !important;
      background-color: rgba(255, 255, 255, 1.0) !important;
      border: 1px solid rgba(0, 0, 0, 0.40) !important;
      background-image: none !important;
      padding: 10px;
    }
 
      `);
  static disabled = {
    pages: ["/participate/deposit/search", "/participate/deposit/learn-how","/participate/claim", "/participate/direct-claim", "/myclaims","/claims", "/develop",
        "/search/find/datasources"],
    entities: ["datasource"]
  };

  public static getSearchCustomFilterByAggregator(): SearchCustomFilter {
    // let filter:SearchCustomFilter = new SearchCustomFilter(PortalAggregators.eoscInfo.fieldName, PortalAggregators.eoscInfo.queryFieldName, PortalAggregators.eoscInfo.valueId, PortalAggregators.eoscInfo.valueName);
    // filter.promptToAddFilter = false;
    // filter.isHiddenFilter = true;
    // console.log(PortalAggregators.eoscInfo.fieldName);
    // console.log(filter);
    // return filter;
    return null;
  }

  public static getCommunityInfo(): any {
    return Portal.getMockCommunityInfo(PortalAggregators.eoscInfo.menuId, PortalAggregators.disabled.entities,PortalAggregators.disabled.pages);
  }
}



