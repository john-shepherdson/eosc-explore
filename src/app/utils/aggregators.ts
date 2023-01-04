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
    new AggregatorInfo("eosc", "Eosc Explore", "https://marketplace.eosc-portal.eu/packs/media/images/eosc-logo-mono-65a4962b88cf1caa9e35838e33022ca8.png",
       null, null, null,    null,null,null ,false,false,
      `
 
 
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



