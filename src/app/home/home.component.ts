import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import "rxjs/add/observable/zip";
import {Meta, Title} from '@angular/platform-browser';
import {ConfigurationService} from '../openaireLibrary/utils/configuration/configuration.service';
import {SearchPublicationsService} from '../openaireLibrary/services/searchPublications.service';
import {FetchDataproviders} from '../openaireLibrary/utils/fetchEntitiesClasses/fetchDataproviders.class';
import {SearchDataprovidersService} from '../openaireLibrary/services/searchDataproviders.service';
import {SearchProjectsService} from '../openaireLibrary/services/searchProjects.service';
import {SearchDatasetsService} from '../openaireLibrary/services/searchDatasets.service';
import {SearchOrganizationsService} from '../openaireLibrary/services/searchOrganizations.service';
import {RefineFieldResultsService} from '../openaireLibrary/services/refineFieldResults.service';
import {SearchFields} from '../openaireLibrary/utils/properties/searchFields';
import {NumberUtils} from '../openaireLibrary/utils/number-utils.class';

import {RouterHelper} from '../openaireLibrary/utils/routerHelper.class';
import {EnvProperties} from '../openaireLibrary/utils/properties/env-properties';
import {ErrorCodes} from '../openaireLibrary/utils/properties/errorCodes';
import {PiwikService} from '../openaireLibrary/utils/piwik/piwik.service';
import {SEOService} from '../openaireLibrary/sharedComponents/SEO/SEO.service';
import {SearchCustomFilter} from "../openaireLibrary/searchPages/searchUtils/searchUtils.class";
import {StringUtils} from "../openaireLibrary/utils/string-utils.class";
import {SearchSoftwareService} from "../openaireLibrary/services/searchSoftware.service";
import {SearchOrpsService} from "../openaireLibrary/services/searchOrps.service";
import {FilterInfo, PortalAggregators} from "../utils/aggregators";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  public piwiksub: any;
  public subfunders: any;

  public pageTitle = "OpenAIRE"
  public keyword: string = "";

  public searchFields: SearchFields = new SearchFields();
  public errorCodes: ErrorCodes = new ErrorCodes();
  public routerHelper: RouterHelper = new RouterHelper();

  public publicationsSize: any = null;
  public datasetsSize: any = null;
  public softwareSize: any = null;
  public otherSize: any = null;
  public organizationsSize: any = null;
  public fundersSize: any = null;
  public projectsSize: any = null;
  public datasourcesSize: any = null;

  public fetchDataproviders: FetchDataproviders;

  showPublications: boolean = false;
  showDatasets: boolean = false;
  showSoftware: boolean = false;
  showOrp: boolean = false;
  showOrganizations: boolean = false;
  showProjects: boolean = false;
  showDataProviders: boolean = false;
  properties: EnvProperties;
  public subPub;
  public subSoft;
  public subOrp;
  public subData;
  public subProjects;
  public subOrg;
  public subDataPr;
  customFilter:SearchCustomFilter= null;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _searchPublicationsService: SearchPublicationsService,
    private _searchDataprovidersService: SearchDataprovidersService,
    private _searchProjectsService: SearchProjectsService,
    private _searchDatasetsService: SearchDatasetsService,
    private _searchSoftwareService: SearchSoftwareService,
    private _searchOrpsService: SearchOrpsService,
    private _searchOrganizationsService: SearchOrganizationsService,
    private _refineFieldResultsService: RefineFieldResultsService,
    private location: Location, private _piwikService: PiwikService,
    private config: ConfigurationService, private _meta: Meta, private _title: Title, private seoService: SEOService
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    let agg:FilterInfo = PortalAggregators.getFilterInfoByMenuId(id);
    this.customFilter = PortalAggregators.getSearchCustomFilterByAggregator(agg);
    let description = "openAIRE, open access, publications, research results, European commission, search";

    let title = "OpenAIRE | "+agg.title;

    this._title.setTitle(title);
    this._meta.updateTag({content: description}, "name='description'");
    this._meta.updateTag({content: description}, "property='og:description'");
    this._meta.updateTag({content: title}, "property='og:title'");

    // this.customFilter.setValues("Country", "country", "CA" , "Canada");
  }

  public ngOnInit() {

    this.route.data
      .subscribe((data: { envSpecific: EnvProperties }) => {
        this.properties = data.envSpecific;
        this.seoService.createLinkForCanonicalURL(this.properties.baseLink + this._router.url, false);
          let url = this.properties.baseLink + this._router.url;
          this._meta.updateTag({content: url}, "property='og:url'");
          if (this.properties.enablePiwikTrack && (typeof document !== 'undefined')) {
            this.piwiksub = this._piwikService.trackView(this.properties, "OpenAIRE").subscribe();
          }
          this.showPublications = true;
          this.showOrp = true;
          this.showOrganizations = true;
          this.showDatasets = true;
          this.showSoftware = true;
          this.showProjects = true;
          this.showDataProviders = true;
          this.getNumbers();

       /*   this.config.getCommunityInformation(this.properties.adminToolsAPIURL, this.properties.adminToolsCommunity).subscribe(data => {
              let showEntity = {};
              for (let i = 0; i < data['entities'].length; i++) {

                showEntity["" + data['entities'][i]["pid"] + ""] = data['entities'][i]["isEnabled"];
              }
              this.showPublications = showEntity["publication"];
              this.showDatasets = showEntity["dataset"];
              this.showProjects = showEntity["project"];
              this.showDataProviders = showEntity["datasource"];
              this.getNumbers();
              // if(this.showDataProviders) {
              //   this.fetchDataproviders.getResultsForHome(this.numResults, this.properties);
              // }
            },
            error => {
              this.handleError("Error getting community information", error);
            }
          );*/

      });

  }

  public ngOnDestroy() {
    if (this.piwiksub) {
      this.piwiksub.unsubscribe();
    }
    if (this.subfunders) {
      this.subfunders.unsubscribe();
    }
    if (this.subPub) {
      this.subPub.unsubscribe();
    }
    if (this.subOrp) {
      this.subOrp.unsubscribe();
    }
    if (this.subSoft) {
      this.subSoft.unsubscribe();
    }
    if (this.subData) {
      this.subData.unsubscribe();
    }
    if (this.subProjects) {
      this.subProjects.unsubscribe();
    }
    if (this.subOrg) {
      this.subOrg.unsubscribe();
    }
    if (this.subDataPr) {
      this.subDataPr.unsubscribe();
    }

  }

  private getNumbers() {
    let refineQuery = null;
    if(this.customFilter){
      refineQuery= "&fq="+StringUtils.URIEncode(this.customFilter.queryFieldName + " exact " + StringUtils.quote((this.customFilter.valueId )));
    }
    if (this.showPublications) {
      this.subPub = this._searchPublicationsService.numOfSearchPublications("", this.properties,refineQuery).subscribe(
        data => {
          if (data  && data > 0) {
            this.publicationsSize = NumberUtils.roundNumber(data);
          }else{
            this.showPublications = false;
          }
        },
        err => {
          this.handleError("Error getting number of publications", err);
        }
      );
    }
    if (this.showDatasets) {
      this.subData = this._searchDatasetsService.numOfSearchDatasets("", this.properties,refineQuery).subscribe(
        data => {
          if (data && data > 0) {
            this.datasetsSize = NumberUtils.roundNumber(data);
          }else{
            this.showDatasets = false;
          }
        },
        err => {
          this.handleError("Error getting number of research data", err);
        }
      );
    }
    if (this.showSoftware) {
      this.subSoft = this._searchSoftwareService.numOfSearchSoftware("", this.properties,refineQuery).subscribe(
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
      );
    }
    if (this.showOrp) {
      this.subOrp = this._searchOrpsService.numOfSearchOrps("", this.properties,refineQuery).subscribe(
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
      );
    }
    if (this.showProjects) {
      this.subfunders = this._refineFieldResultsService.getRefineFieldsResultsByEntityName(["funder"], "project", this.properties, refineQuery).subscribe(
        data => {
          if (data[0] && data[0] > 0) {
            this.projectsSize = NumberUtils.roundNumber(data[0]);
          }
          else{
            this.showProjects = false;
          }
          if (data[1].length > 0 && data[1][0].filterId == "funder" && data[1][0].values) {
            this.fundersSize = NumberUtils.roundNumber(data[1][0].values.length);
          }
        },
        err => {
          this.handleError("Error getting 'funder' field results of projects", err);
        });
    }
    if (this.showDataProviders) {
      this.subDataPr = this._searchDataprovidersService.numOfSearchDataproviders("", this.properties, refineQuery).subscribe(
        data => {
          if (data && data > 0) {
            this.datasourcesSize = NumberUtils.roundNumber(data);
          }else{
            this.showDataProviders = false;
          }
        },
        err => {
          this.handleError("Error getting number of content providers", err);
        }
      );
    }
    if (this.showOrganizations) {
      this.subOrg = this._searchOrganizationsService.numOfSearchOrganizations("", this.properties, refineQuery).subscribe(
        data => {
          if (data && data > 0) {
            this.organizationsSize = NumberUtils.roundNumber(data);
          }
        },
        err => {
          this.handleError("Error getting number of Organizations", err);
        }
      );
    }
  }

  private handleError(message: string, error) {
    console.error("Home Page: " + message, error);
  }
}
