import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import "rxjs/add/observable/zip";
import {Title, Meta}                  from '@angular/platform-browser';
import {ConfigurationService} from '../openaireLibrary/utils/configuration/configuration.service';
import {  SearchDataprovidersService} from '../openaireLibrary/services/searchDataproviders.service';
import {  SearchProjectsService} from '../openaireLibrary/services/searchProjects.service';
import {  SearchOrganizationsService} from '../openaireLibrary/services/searchOrganizations.service';
import {  RefineFieldResultsService} from '../openaireLibrary/services/refineFieldResults.service';
import {  SearchFields} from '../openaireLibrary/utils/properties/searchFields';
import {  NumberUtils} from '../openaireLibrary/utils/number-utils.class';

import {  RouterHelper} from '../openaireLibrary/utils/routerHelper.class';
import { EnvProperties} from '../openaireLibrary/utils/properties/env-properties';
import { ErrorCodes} from '../openaireLibrary/utils/properties/errorCodes';
import {PiwikService} from '../openaireLibrary/utils/piwik/piwik.service';
import { SEOService } from '../openaireLibrary/sharedComponents/SEO/SEO.service';
import {SearchResearchResultsService} from "../openaireLibrary/services/searchResearchResults.service";
import {HelperService} from "../openaireLibrary/utils/helper/helper.service";
import {Filter} from "../openaireLibrary/searchPages/searchUtils/searchHelperClasses.class";
import {AggregatorInfo, PortalAggregators} from "../utils/aggregators";
import {SearchCustomFilter} from "../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {properties} from "../../environments/environment";
import {portalProperties} from "../../environments/environment-aggregator";
import {StringUtils} from "../openaireLibrary/utils/string-utils.class";
import {ConnectHelper} from "../openaireLibrary/connect/connectHelper";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {


  // public pageTitle = "OpenAIRE - Explore |" ;
  public keyword:string = "";

  public searchFields:SearchFields = new SearchFields();
  public errorCodes:ErrorCodes = new ErrorCodes();
  public routerHelper:RouterHelper = new RouterHelper();

  public publicationsSize:any = null;
  public datasetsSize:any = null;
  public datasetsLinkedSize:any = null;
  public softwareLinkedSize:any = null;
  public softwareSize: any = null;
  public otherSize: any = null;
  public fundersSize:any = null;
  public projectsSize:any = null;
  public datasourcesSize:any = null;

  showPublications: boolean = portalProperties.entities.publication.isEnabled;
  showDatasets: boolean = portalProperties.entities.dataset.isEnabled;
  showSoftware: boolean = portalProperties.entities.software.isEnabled;
  showOrp: boolean = portalProperties.entities.other.isEnabled;
  showOrganizations: boolean = portalProperties.entities.organization.isEnabled;
  showProjects: boolean = portalProperties.entities.project.isEnabled;
  showDataProviders: boolean = portalProperties.entities.datasource.isEnabled;
  properties: EnvProperties;
  public readMore: boolean = false;

  subs: Subscription[] = [];

  resultsQuickFilter: { filter: Filter, selected: boolean, filterId: string, value: string } = {
    filter: null,
    selected: true,
    filterId: "resultbestaccessright",
    value: "Open Access"
  };
  selectedEntity = "all";
  selectedEntitySimpleUrl;
  selectedEntityAdvancedUrl;
  resultTypes:Filter = {values:[],filterId:"type", countSelectedValues: 0, filterType: 'checkbox', originalFilterId: "", valueIsExact: true, title: "Result Types",filterOperator:"or"};
  public pageContents = null;
  customFilter:SearchCustomFilter= null;
  aggregatorId;
  aggregator:AggregatorInfo;
  constructor (
    private route: ActivatedRoute,
    private _router: Router,
    private _searchResearchResultsService: SearchResearchResultsService,
    private _searchDataprovidersService: SearchDataprovidersService,
    private _searchProjectsService: SearchProjectsService,
    private _searchOrganizationsService: SearchOrganizationsService,
    private _refineFieldResultsService:RefineFieldResultsService,
    private location: Location, private _piwikService:PiwikService,
    private config: ConfigurationService, private _meta: Meta, private _title: Title, private seoService: SEOService,
    private helper: HelperService
  ) {
    this.aggregatorId = ConnectHelper.getCommunityFromDomain(properties.domain);
    this.aggregator =  PortalAggregators.getFilterInfoByMenuId(this.aggregatorId);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(this.aggregator);
    let description = "OpenAIRE Explore: Over 100M of research deduplicated, 170K research software, 11M research data. One of the largest open scholarly records collection worldwide.";
    let title = "OpenAIRE - Explore| " +this.aggregator.title;

    this._title.setTitle(title);
    this._meta.updateTag({content:description},"name='description'");
    this._meta.updateTag({content:description},"property='og:description'");
    this._meta.updateTag({content:title},"property='og:title'");


  }

  private getPageContents() {
    this.subs.push(this.helper.getPageHelpContents(this.properties, 'openaire', this._router.url).subscribe(contents => {
      this.pageContents = contents;
    }));
  }

  public getKeys(obj: {}) {
    return Object.keys(obj);
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  public ceil(num: number) {
    return Math.ceil(num);
  }

  public ngOnInit() {
    this.properties = properties;
    this.seoService.createLinkForCanonicalURL(this.properties.domain + this.properties.baseLink+this._router.url, false);
    this.getPageContents();

    if(this.properties!=null){
      var url = this.properties.domain + this.properties.baseLink+this._router.url;
      this._meta.updateTag({content:url},"property='og:url'");
      if(this.properties.enablePiwikTrack && (typeof document !== 'undefined')){
        this.subs.push(this._piwikService.trackView(this.properties, "OpenAIRE").subscribe());
      }

      //this.config.getCommunityInformation(this.properties, this.properties.adminToolsCommunity ).subscribe(data => {
      this.subs.push(this.config.communityInformationState.subscribe(data => {
          if(data) {
            var showEntity = {};
            for (var i = 0; i < data['entities'].length; i++) {

              showEntity["" + data['entities'][i]["pid"] + ""] = data['entities'][i]["isEnabled"];
            }
            this.showPublications = showEntity["publication"];
            this.showDatasets = showEntity["dataset"];
            this.showSoftware = showEntity["software"];
            this.showOrp = showEntity["orp"];
            this.showProjects = showEntity["project"];
            this.showDataProviders = showEntity["datasource"];
            this.showOrganizations = showEntity["organization"];
            if(this.showPublications){
              this.resultTypes.values.push({name: "Publications" , id:"publications",selected:true, number:0});
            }
            if(this.showDatasets){
              this.resultTypes.values.push({name: "Research data" , id:"datasets",selected:true, number:0});
            }
            if(this.showSoftware){
              this.resultTypes.values.push({name: "Software" , id:"software",selected:true, number:0});
            }
            if(this.showOrp){
              this.resultTypes.values.push({name: "Other research products" , id:"other",selected:true, number:0});
            }
            this.getNumbers();
          }
        },
        error => {
          this.handleError("Error getting community information", error);
        }
      ));
    }

  }
  public ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

  private getNumbers() {
    let refineQuery = null
    if(this.customFilter){
      refineQuery= "&fq="+StringUtils.URIEncode(this.customFilter.queryFieldName + " exact " + StringUtils.quote((this.customFilter.valueId )));
    }
    if(this.showPublications){
      this.subs.push(this._searchResearchResultsService.numOfSearchResults("publication", "", this.properties, refineQuery).subscribe(
        data => {
          if(data && data != null && data > 0 ){
            this.publicationsSize = NumberUtils.roundNumber(data);

          }
        },
        err => {
          //console.log(err);
          this.handleError("Error getting number of publications", err);
        }
      ));
    }
    if(this.showDatasets){
      this.subs.push(this._searchResearchResultsService.numOfSearchResults("dataset", "", this.properties, refineQuery).subscribe(
        data => {
          if(data && data != null && data > 0 ){
            this.datasetsSize = NumberUtils.roundNumber(data);
          }
        },
        err => {
          //console.log(err);
          this.handleError("Error getting number of research data", err);
        }
      ));
      /*this.subs.push(this._searchResearchResultsService.numOfSearchResultsLinkedToPub("dataset", this.properties, refineQuery).subscribe(
        data => {
          if(data && data != null && data > 0 ){
            this.datasetsLinkedSize = NumberUtils.roundNumber(data);
          }
        },
        err => {
          //console.log(err);
          this.handleError("Error getting number of linkedresearch data", err);
        }
      ));*/

    }
    if (this.showSoftware) {
      this.subs.push(this._searchResearchResultsService.numOfSearchResults("software", "", this.properties, refineQuery).subscribe(
        data => {
          if (data && data > 0) {
            this.softwareSize = NumberUtils.roundNumber(data);
          }else{
            this.showSoftware = false;
          }
        },
        err => {
          this.handleError("Error getting number of software data", err);
        }
      ));
    /*  this.subs.push(this._searchResearchResultsService.numOfSearchResultsLinkedToPub("software", this.properties, refineQuery).subscribe(
        data => {
          if(data && data != null && data > 0 ){
            this.softwareLinkedSize = NumberUtils.roundNumber(data);
          }
        },
        err => {
          //console.log(err);
          this.handleError("Error getting number of linked software", err);
        }
      ));*/
    }
    if (this.showOrp) {
      this.subs.push(this._searchResearchResultsService.numOfSearchResults("other", "", this.properties, refineQuery).subscribe(
        data => {
          if (data && data > 0) {
            this.otherSize = NumberUtils.roundNumber(data);
          }else{
            this.showOrp = false;
          }
        },
        err => {
          this.handleError("Error getting number of software data", err);
        }
      ));
    }
    if(this.showProjects){
      this.subs.push(this._refineFieldResultsService.getRefineFieldsResultsByEntityName(["funder"],"project", this.properties, refineQuery).subscribe(
        data => {


          if(data[0] && data[0] > 0 ){
            this.projectsSize = NumberUtils.roundNumber(data[0]);
          }
          if(data[1].length > 0 && data[1][0].filterId == "funder" && data[1][0].values ){
            this.fundersSize = NumberUtils.roundNumber(data[1][0].values.length);
          }

        },
        err => {
          //console.log(err);
          this.handleError("Error getting 'funder' field results of projects", err);
        }));
    }
    if(this.showDataProviders){
      this.subs.push(this._searchDataprovidersService.numOfSearchDataproviders("", this.properties, refineQuery).subscribe(
        data => {
          if(data && data != null && data > 0 ){
            this.datasourcesSize = NumberUtils.roundNumber(data);
          }

        },
        err => {
          //console.log(err);
          this.handleError("Error getting number of content providers", err);
        }
      ));
    }
  }

  private handleError(message: string, error) {
    console.error("Home Page: "+message, error);
  }
  entityChanged($event){
    this.selectedEntity = $event.entity;
    this.selectedEntitySimpleUrl = $event.simpleUrl;
    this.selectedEntityAdvancedUrl = $event.advancedUrl;
  }
  goTo(simple:boolean){
    let url = (simple)?this.selectedEntitySimpleUrl:this.selectedEntityAdvancedUrl;
    let parameterNames = [];
    let parameterValues = [];
    if (this.selectedEntity == "result") {
      if (this.resultTypes) {
        let values = [];
        for(let value of this.resultTypes.values){
          if (value.selected) {
            values.push(value.id);
          }
        }
        if (values.length > 0 && values.length !=4) {
          parameterNames.push("type");
          parameterValues.push(values.join(","));
        }
        if (this.resultsQuickFilter) {
          parameterNames.push("qf");
          parameterValues.push("" + this.resultsQuickFilter.selected);
        }
      }
    }else if(this.selectedEntity == "all"){
      if (this.resultsQuickFilter) {
        parameterNames.push("qf");
        parameterValues.push("true");
      }
    }
    if(this.keyword.length > 0) {
      parameterNames.push("fv0");
      parameterValues.push(this.keyword);
      parameterNames.push("f0");
      parameterValues.push("q");
    }
    if(this.customFilter){
      parameterNames.push(this.customFilter.queryFieldName);
      parameterValues.push(this.customFilter.valueId);
      parameterNames.push("cf");
      parameterValues.push("true");
    }
    this._router.navigate([url], {queryParams: this.routerHelper.createQueryParams(parameterNames, parameterValues)});
  }
  getQueryParamsForAdvancedSearch(entity){
    let params = {};
    if (entity == "result") {
      if (this.resultsQuickFilter) {
        params["qf"] = "" + this.resultsQuickFilter.selected;
      }
    }
    if(this.keyword.length > 0) {
      params["fv0"] = "" + this.keyword;
      params["f0"] = "q";
    }
    if(this.customFilter){
     params = this.customFilter.getParameters(params);
    }
    return params;
  }
}
