import {SearchCustomFilter} from "../openaireLibrary/searchPages/searchUtils/searchUtils.class";

export class FilterInfo {
  menuId: string;
  title: string;
  logoUrl: string;
  fieldName: string; //Country
  queryFieldName: string; //country
  valueId: string; //gr
  valueName: string; // Greece

  constructor(menuId: string, title: string, logoUrl: string, fieldName: string, queryFieldName: string, valueId: string, valueName: string) {
    this.menuId = menuId;
    this.title = title;
    this.logoUrl = logoUrl;
    this.fieldName = fieldName;
    this.queryFieldName = queryFieldName;
    this.valueId = valueId;
    this.valueName = valueName;
  }
}

export class PortalAggregators {
  static list: FilterInfo[] = [
    new FilterInfo("canada", "Canadian Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "CA", "Canada"),
    new FilterInfo("italy", "Italian Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "IT", "Italy"),
    new FilterInfo("greece", "Greek Aggregator", "assets/common-assets/logo-small-aggregator.png", "Country", "country", "GR", "Greece"),

  ];
  static defaultAggregator: FilterInfo = PortalAggregators.list[0];

  public static getList(): FilterInfo[] {
    return PortalAggregators.list;
  }

  public static getFilterInfoByMenuId(menuId: string): FilterInfo {
    for (let agg of this.getList()) {
      if (agg.menuId == menuId) {
        return agg;
      }
    }
    return PortalAggregators.defaultAggregator;
  }

  public static getSearchCustomFilterByAggregator(agg: FilterInfo): SearchCustomFilter {
    let filter:SearchCustomFilter = null;
    if(agg) {
      filter = new SearchCustomFilter(agg.fieldName, agg.queryFieldName, agg.valueId, agg.valueName);
    }
    return filter;
  }
}



