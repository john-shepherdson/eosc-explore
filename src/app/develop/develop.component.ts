import {Component, OnInit} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {SEOService} from "../openaireLibrary/sharedComponents/SEO/SEO.service";
import {properties} from "../../environments/environment";
import {Router} from "@angular/router";
import {AggregatorInfo, PortalAggregators} from "../utils/aggregators";
import {ConnectHelper} from "../openaireLibrary/connect/connectHelper";

@Component({
  selector: 'develop',
  template: `
    <div page-content>
      <div inner>
        <div *ngIf="aggregator" class="uk-container uk-container-large uk-section-small">
          <h2 class="uk-text-center">
            Develop
          </h2>
          <div class="uk-margin-medium-top uk-card uk-card-body uk-card-default">
            <h3 class="uk-text-center">Help developers with <span
              class="portal-color uk-text-bold">OpenAIRE APIs</span>
            </h3>
            <div class="uk-margin-large-top uk-margin-medium-bottom">
              Not sure where to start? Let us give you some guides and request examples.
            </div>
            <div class="uk-grid   uk-child-width-1-1" uk-grid>
              <div>
                <p>
                  <span class="uk-text-bold">For research outcomes </span>
                  (publications, datasets, software and other research data) you can use the
                  <a href="http://api.openaire.eu/api.html" target="_blank">Selective Access APIs</a>
                  by adding the <span class="uk-text-lowercase">country</span> parameter.
                </p>
                <p>
                  Request examples:
                </p>
                <ul class="portal-circle">
                  <li>
                    <span class="uk-text-bold">Access “Publications”</span><br>
                    <span class="uk-text-bold">GET</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/search/publications?country={{aggregator.valueId}}</span>
                  </li>
                  <li>
                    <span class="uk-text-bold">Access “Open Access Publications”</span><br>
                    <span class="uk-text-bold">GET</span>
                    <span
                      class="uk-text-break space">http://api.openaire.eu/search/publications?country={{aggregator.valueId}}&OA=true</span>
                  </li>
                  <li>
                    <span class="uk-text-bold">Access “Datasets”</span><br>
                    <span class="uk-text-bold">GET</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/search/datasets?country={{aggregator.valueId}}</span>
                  </li>
                  <li>
                    <span class="uk-text-bold">Access “Software”</span><br>
                    <span class="uk-text-bold">GET</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/search/software?country={{aggregator.valueId}}</span>
                  </li>
                  <li>
                    <span class="uk-text-bold">Access “Other Research”</span><br>
                    <span class="uk-text-bold">GET</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/search/other?country={{aggregator.valueId}}</span>
                  </li>
                </ul>
              </div>
              <!--<div>
                <p>
                  <span class="uk-text-bold">For projects</span> you can use the <a
                  href="http://api.openaire.eu/api.html" target="_blank">Selective Access APIs</a>
                  and the <a href="http://api.openaire.eu/bulk-projects.html" target="_blank">Bulk Access APIs</a>.
                </p>
                <p>
                  Request examples:
                </p>
                <ul class="portal-circle">
                  <li>
                    <span class="uk-text-bold">For the “Selective Access”</span><br>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/search/projects?country={{aggregator.valueId}}</span>
                  </li>
                  <li>
                    <span class="uk-text-bold">For the “Bulk Access”</span><br>
                    <span class="uk-text-bold uk-text-nowrap">DSpace endpoint:</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/projects/dspace/{{aggregator.valueId}}/ALL/ ALL</span><br>
                    <span class="uk-text-bold uk-text-nowrap">ePrints endpoint:</span>
                    <span
                      class="uk-text-break space">https://api.openaire.eu/projects/eprints/{{aggregator.valueId}}/ALL/ ALL</span>
                  </li>
                </ul>
                <div class="uk-flex uk-flex-center uk-width-1-1 uk-margin-medium-top">
                  <img width="350" src="assets/develop.png">
                </div>
              </div>-->
            </div>
            <div class="uk-margin-large-top uk-flex uk-flex-center uk-padding">
              <div class="documentation">
                For <span
                class="uk-text-bold">more information</span> on the full potential of the OpenAIRE APIs please check
                the <a href="http://develop.openaire.eu/" target="_blank">OpenAIRE API Documentation</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['develop.component.css']
})
export class DevelopComponent implements OnInit {
  
  public aggregator: AggregatorInfo = null;

  constructor(private seoService: SEOService,
              private _meta: Meta,
              private _router: Router,
              private _title: Title) {
  }
  
  ngOnInit() {

      let id = ConnectHelper.getCommunityFromDomain(properties.domain);
      this.aggregator = PortalAggregators.getFilterInfoByMenuId(id);
      if (this.aggregator) {

        /* Metadata */
        const url = properties.domain + properties.baseLink + this._router.url;
        this.seoService.createLinkForCanonicalURL(url, false);
        this._meta.updateTag({content: url}, "property='og:url'");
        const description = "Develop | " + this.aggregator.valueName;
        const title = "Develop | " + this.aggregator.valueName;
        this._meta.updateTag({content: description}, "name='description'");
        this._meta.updateTag({content: description}, "property='og:description'");
        this._meta.updateTag({content: title}, "property='og:title'");
        this._title.setTitle(title);

      }else {
        this.navigateToError();
      }

  }

  private navigateToError() {
    this._router.navigate(['/error'], {queryParams: {'page': this._router.url}});
  }
  

}
