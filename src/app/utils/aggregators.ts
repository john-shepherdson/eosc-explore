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
  mainColor:string;
  darkColor:string;
  background:string;
  graphSectionTitle: string;
  graphSectionText: string;

  constructor(menuId: string, title: string, logoUrl: string, fieldName: string, queryFieldName: string, valueId: string,
              valueName: string, mainColor:string=null, darkColor:string=null, background:string=null,graphSectionTitle: string = null, graphSectionText:string = null ) {
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
  }
}

export class PortalAggregators {
  static list: AggregatorInfo[] = [
    new AggregatorInfo("canada", "Canadian Aggregator", "assets/canada-logo.png", "Country", "country", "CA", "Canada","#E80000","#ad0000", "/assets/canada-background.svg",
      "Portal to Canadian Research Outputs", `<span>
            Welcome to the beta Portal to Canadian Research Outputs, which has been developed as part of a
            collaboration between CARL and OpenAIRE as part of the OpenAIRE Advance Project. The portal enables users
            to search and browse Canadian content that is included in the OpenAIRE aggregation. The number of
            research products is expected to grow in 2021 as more Canadian repositories become compliant with
            OpenAIRE guidelines and Canadian affiliation information is enhanced. For more information, visit the
            <a
              href="https://www.carl-abrc.ca/advancing-research/institutional-repositories/open-repositories-working-group/openaire-collaboration/" target="_blank">CARL website</a>.
          </span>
            <br>
          <span>
            Bienvenue sur la version bêta du portail des résultats de la recherche canadienne, qui a été développé dans le cadre d'une collaboration entre l'ABRC et OpenAIRE dans le contexte du projet OpenAIRE Advance. Le portail permet aux utilisateurs de repérer et de parcourir le contenu canadien inclus sur la plateforme OpenAIRE. La quantité des résultats de la recherche canadienne disponible sur la plateforme augmentera tout au long de l'année 2021 au fur et à mesure que les dépôts canadiens se conformeront aux directives d'OpenAIRE et que les détails relatifs aux affiliations canadiennes seront améliorés. Pour plus d'informations,
              <a
                href="https://www.carl-abrc.ca/fr/faire-avancer-la-recherche/depots-institutionnels/groupe-de-travail-depots-ouverts/collaboration-avec-openaire/" target="_blank">veuillez visiter le site Web de l’ABRC</a>.
          </span>`),
    new AggregatorInfo("italy", "Italian Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "IT", "Italy"),
    new AggregatorInfo("greece", "Greek Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "GR", "Greece"),

  ];
  static disabled = {
    "canada": {pages: [], entities: ["software"]},
    "italy": {pages: [], entities: []},
    "greece": {pages: [], entities: []}
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
    if(agg) {
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



