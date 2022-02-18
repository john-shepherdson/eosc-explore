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
  mainColor:string;
  darkColor:string;
  background:string;
  graphSectionTitle: string;
  graphSectionText: string;
  enableLogin: boolean;

  constructor(menuId: string, title: string, logoUrl: string, fieldName: string, queryFieldName: string, valueId: string,
              valueName: string, mainColor:string=null, darkColor:string=null, background:string=null,graphSectionTitle: string = null, graphSectionText:string = null, enableLogin:boolean = true ) {
    this.menuId = menuId;
    this.title = title;
    this.logoUrl = logoUrl;
    this.fieldName = fieldName;
    this.queryFieldName = queryFieldName;
    this.valueId = valueId;
    this.valueName = valueName;
    this.mainColor = mainColor;
    this.darkColor = darkColor;
    this.background = background;
    this.graphSectionTitle = graphSectionTitle;
    this.graphSectionText = graphSectionText;
    this.enableLogin = enableLogin;
  }
}

export class PortalAggregators {
  static list: AggregatorInfo[] = [
    new AggregatorInfo("canada", "Canadian Aggregator", "assets/canada-logo.png", "Country", "country", "CA", "Canada","#E80000","#ad0000", "/assets/canada-background.svg",
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
          </span>`),
    new AggregatorInfo("italy", "Italian Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "IT", "Italy"),
    new AggregatorInfo("greece", "Greek Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "GR", "Greece"),
    new AggregatorInfo("eosc", "Eosc Explore", "https://providers.eosc-portal.eu/assets/images/EOSC_Portal_Logo.png", null, null, null, null, "#3540b6","#233d4c",  null,null,null ,false)

  ];
  static disabled = {
    "canada": {pages: [], entities: ["software"]},
    "italy": {pages: [], entities: []},
    "greece": {pages: [], entities: []},
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



