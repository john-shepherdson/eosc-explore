import {SearchCustomFilter} from "../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {Portal} from "../openaireLibrary/utils/entities/adminTool/portal";
import {properties} from "../../environments/environment";

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
  static list: AggregatorInfo[] = [
    new AggregatorInfo("canada", "Canadian Aggregator", "assets/canada-logo.png", "Country",
      "country", "CA", "Canada",
      "Portal to Canadian Research Outputs", `<span>
            Welcome to the Portal of Canadian Research Outputs. This has been developed as part of a collaboration between 
            Canadian Association of Research Libraries (CARL) and OpenAIRE. The portal presents research results collected 
            from Canadian institutional repositories compliant to <a
              href="https://guidelines.openaire.eu/" target="_blank">OpenAIRE guidelines</a> and from the OpenAIRE Research Graph. 
              It links them to three Canadian funders, Natural Sciences and Engineering Research Council of Canada, Canadian Institutes of Health Research and 
              Social Sciences and Humanities Research Council. For more information, visit the <a
              Social Sciences and Humanities Research Council. For more information, visit the <a
              href="https://www.carl-abrc.ca/advancing-research/institutional-repositories/open-repositories-working-group/openaire-collaboration/" target="_blank">CARL website</a>.
          </span>
            <br>
          <span>
            Bienvenue sur le portal des résultats de la recherche canadienne, qui a été développé dans le cadre d'une collaboration entre l'ABRC et OpenAIRE dans le contexte du projet OpenAIRE Advance. Le portail permet aux utilisateurs de repérer et de parcourir le contenu canadien inclus sur la plateforme OpenAIRE. La quantité des résultats de la recherche canadienne disponible sur la plateforme augmentera tout au long de l'année 2021 au fur et à mesure que les dépôts canadiens se conformeront aux directives d'OpenAIRE et que les détails relatifs aux affiliations canadiennes seront améliorés. Pour plus d'informations,
              <a
                href="https://www.carl-abrc.ca/fr/faire-avancer-la-recherche/depots-institutionnels/groupe-de-travail-depots-ouverts/collaboration-avec-openaire/" target="_blank">veuillez visiter le site Web de l’ABRC</a>.
          </span>`,true, true,`
          :root {
          --primary-color: #E80000;
          --primary-color-rgb: 232,0,0;
          --primary-dark-color: #ad0000;
          --graph-background:  url('/assets/canada-background.svg') no-repeat bottom;
         --label-secondary:  #E80000;
          /* Fonts */
  --text-primary-color: var(primary-color);
  --text-gradient-color: linear-gradient(110deg, var(primary-color) 0%, var(--monitor-dark-color) 100%);

  /** Label */
  --label-secondary: var(--primary-color);

  
          }
          `),
    new AggregatorInfo("italy", "Italian Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "IT", "Italy"),
    new AggregatorInfo("greece", "Greek Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "GR", "Greece"),
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
  background: url(//marketplace.eosc-portal.eu/packs/media/images/home-bg-89b63b3d579f3530ec6283f51e1648bc.png) no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
  background-position: 50% -120px;
  z-index: 3;
}
#searchImage{
background: url('https://marketplace.eosc-portal.eu/packs/media/images/eosc-logo-color-883f208671ef77b15b9cd067ecdc369b.png') no-repeat center left;
width: 250px;
height: 80px;
background-size: 250px 80px;
margin-left: 80px;
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
 
      `)

  ];
  static disabled = {
    "canada": {pages: ["/search/find/services"], entities: ["software", "service"]},
    "italy": {pages: ["/search/find/services"], entities: ["service"]},
    "greece": {pages: ["/search/find/services"], entities: ["service"]},
    "eosc": {pages: ["/participate/deposit/search", "/participate/deposit/learn-how","/participate/claim", "/participate/direct-claim", "/myclaims","/claims", "/develop"]
      , entities: []}
  };
  static defaultAggregator: AggregatorInfo = PortalAggregators.list[0];

  public static getList(): AggregatorInfo[] {
    return PortalAggregators.list;
  }

  public static getFilterInfoByMenuId(menuId: string): AggregatorInfo {
    for (let agg of this.getList()) {
      if (agg.menuId == menuId) {
        return agg;
      }
    }
    return PortalAggregators.defaultAggregator;
  }

  public static getSearchCustomFilterByAggregator(agg: AggregatorInfo): SearchCustomFilter {
    let filter:SearchCustomFilter = null;
    if(agg && agg.fieldName) {
      filter = new SearchCustomFilter(agg.fieldName, agg.queryFieldName, agg.valueId, agg.valueName);
      filter.promptToAddFilter = false;
      filter.isHiddenFilter = true;
    }
    return filter;
  }

  public static getCommunityInfoByMenuId(menuId: string): any {
    if(PortalAggregators.disabled[menuId]){
      return Portal.getMockCommunityInfo(PortalAggregators.disabled[menuId].entities,PortalAggregators.disabled[menuId].pages);
    }
    return Portal.getMockCommunityInfo([],[]);
  }
}



