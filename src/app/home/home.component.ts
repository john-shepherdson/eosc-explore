import {Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {Observable}       from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import "rxjs/add/observable/zip";
import {Title, Meta}                  from '@angular/platform-browser';
import {ConfigurationService} from '../openaireLibrary/utils/configuration/configuration.service';
import {  SearchPublicationsService} from '../openaireLibrary/services/searchPublications.service';
import {  FetchDataproviders}             from '../openaireLibrary/utils/fetchEntitiesClasses/fetchDataproviders.class';
import {  SearchDataprovidersService} from '../openaireLibrary/services/searchDataproviders.service';
import {  SearchProjectsService} from '../openaireLibrary/services/searchProjects.service';
import {  SearchDatasetsService} from '../openaireLibrary/services/searchDatasets.service';
import {  SearchOrganizationsService} from '../openaireLibrary/services/searchOrganizations.service';
import {  RefineFieldResultsService} from '../openaireLibrary/services/refineFieldResults.service';
import {  SearchFields} from '../openaireLibrary/utils/properties/searchFields';
import {  NumberUtils} from '../openaireLibrary/utils/number-utils.class';

import {  RouterHelper} from '../openaireLibrary/utils/routerHelper.class';
import { EnvProperties} from '../openaireLibrary/utils/properties/env-properties';
import { ErrorCodes} from '../openaireLibrary/utils/properties/errorCodes';
import {PiwikService} from '../openaireLibrary/utils/piwik/piwik.service';
import { SEOService } from '../openaireLibrary/sharedComponents/SEO/SEO.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {
  public piwiksub: any;
  public subfunders: any;

  public pageTitle = "OpenAIRE"
  public keyword:string = "";

  public searchFields:SearchFields = new SearchFields();
  public errorCodes:ErrorCodes = new ErrorCodes();
  public routerHelper:RouterHelper = new RouterHelper();

  public publicationsSize:any = null;
  public datasetsSize:any = null;
  public fundersSize:any = null;
  public projectsSize:any = null;
  public datasourcesSize:any = null;

  private numResults: number = 2;
  public fetchDataproviders : FetchDataproviders;

  showPublications:boolean= false;
  showDatasets:boolean= false;
  showProjects:boolean= false;
  showDataProviders:boolean= false;
  properties: EnvProperties;
public subPub;public subData;public subProjects;public subOrg; public subDataPr;

  constructor (
    private route: ActivatedRoute,
      private _router: Router,
      private _searchPublicationsService: SearchPublicationsService,
      private _searchDataprovidersService: SearchDataprovidersService,
      private _searchProjectsService: SearchProjectsService,
      private _searchDatasetsService: SearchDatasetsService,
      private _searchOrganizationsService: SearchOrganizationsService,
      private _refineFieldResultsService:RefineFieldResultsService,
      private location: Location, private _piwikService:PiwikService,
      private config: ConfigurationService, private _meta: Meta, private _title: Title, private seoService: SEOService
    ) {

          var description = "openAIRE explore, open access, publications, research results, European commission, search";

          var title = "OpenAIRE | Explore";

          this._title.setTitle(title);
          this._meta.updateTag({content:description},"name='description'");
          this._meta.updateTag({content:description},"property='og:description'");
          this._meta.updateTag({content:title},"property='og:title'");


          //this.fetchDataproviders = new FetchDataproviders(this._searchDataprovidersService);
  }

  public ngOnInit() {
    this.route.data
     .subscribe((data: { envSpecific: EnvProperties }) => {
        this.properties = data.envSpecific;
        this.seoService.createLinkForCanonicalURL(this.properties.baseLink+this._router.url, false);
        if(this.properties!=null){
          var url = this.properties.baseLink+this._router.url;
          this._meta.updateTag({content:url},"property='og:url'");
          if(this.properties.enablePiwikTrack && (typeof document !== 'undefined')){
            this.piwiksub = this._piwikService.trackView(this.properties, "OpenAIRE").subscribe();
          }

          this.config.getCommunityInformation(this.properties.adminToolsAPIURL, this.properties.adminToolsCommunity ).subscribe(data => {
                 var showEntity = {};
                 for(var i=0; i< data['entities'].length; i++){

                   showEntity[""+data['entities'][i]["pid"]+""] = data['entities'][i]["isEnabled"];
                 }
                 this.showPublications =  showEntity["publication"];
                 this.showDatasets =   showEntity["dataset"];
                 this.showProjects =   showEntity["project"];
                  this.showDataProviders =   showEntity["datasource"];
                  this.getNumbers();
                  // if(this.showDataProviders) {
                  //   this.fetchDataproviders.getResultsForHome(this.numResults, this.properties);
                  // }
               },
                error => {
                  this.handleError("Error getting community information", error);
                }
            );
        }
       });

  }
  public ngOnDestroy() {
    if(this.piwiksub){
      this.piwiksub.unsubscribe();
    }
    if(this.subfunders){
      this.subfunders.unsubscribe();
    }
        if(this.subPub){
          this.subPub.unsubscribe();
        }
        if(this.subData){
          this.subData.unsubscribe();
        }
    //     if(this.subProjects){
    //       this.subProjects.unsubscribe();
    //     }
    //     if(this.subOrg){
    //       this.subOrg.unsubscribe();
    //     }
        if(this.subDataPr){
          this.subDataPr.unsubscribe();
        }

  }

   private getNumbers() {
     if(this.showPublications){
       this.subPub = this._searchPublicationsService.numOfSearchPublications("", this.properties).subscribe(
               data => {
                  if(data && data != null && data > 0 ){
                      this.publicationsSize = NumberUtils.roundNumber(data);

                  }
               },
               err => {
         		    //console.log(err);
                this.handleError("Error getting number of publications", err);
          		 }
        );
      }
      if(this.showDatasets){
       this.subData = this._searchDatasetsService.numOfSearchDatasets("", this.properties).subscribe(
             data => {
               if(data && data != null && data > 0 ){
                   this.datasetsSize = NumberUtils.roundNumber(data);
               }
             },
             err => {
                 //console.log(err);
                 this.handleError("Error getting number of research data", err);
               }
         );
       }
       if(this.showProjects){
         this.subfunders = this._refineFieldResultsService.getRefineFieldsResultsByEntityName(["funder"],"project", this.properties).subscribe(
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
        });
      }
      if(this.showDataProviders){
        this.subDataPr = this._searchDataprovidersService.numOfSearchDataproviders("", this.properties).subscribe(
           data => {
             if(data && data != null && data > 0 ){
                 this.datasourcesSize = NumberUtils.roundNumber(data);
             }

           },
           err => {
               //console.log(err);
               this.handleError("Error getting number of content providers", err);
           }
       );
     }
   }

   private handleError(message: string, error) {
       console.error("Home Page: "+message, error);
   }
}
