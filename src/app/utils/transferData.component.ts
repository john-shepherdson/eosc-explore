import {Component, Input} from '@angular/core';
import {Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Validators} from "@angular/forms";
import {Location} from '@angular/common';
import {StringUtils} from "../openaireLibrary/utils/string-utils.class";
import {COOKIE} from "../openaireLibrary/login/utils/helper.class";
import {Router} from "@angular/router";
declare var UIkit;

@Component({
  selector: 'egi-transfer-data',
  template: `
      <a (click)="open()"
         [title]="'Transfer Data'"
         [attr.uk-tooltip]="'pos: right; cls: uk-active landing-action-tooltip landing-action-tooltip-portal uk-text-small uk-padding-small'"
      > <span icon="cloud-upload"></span>
          <span class="uk-icon-button uk-icon landing-action-button landing-action-button-portal">
                     <span uk-icon="cloud-upload"></span>
                  </span>
      </a>


      <!-- This is the modal -->
      <div id="modal-example" class="uk-modal uk-open " style="display: block" [class.uk-invisible]="!isOpen">
          <div class="uk-modal-dialog uk-modal-body uk-width-expand uk-text-left">
              <button class="uk-modal-close-default" type="button" uk-close (click)="close()"></button>
              <div class="uk-padding">
                  <div *ngIf="!accessToken" class="">
                      <div class="uk-width-1-1 uk-text-center">
                          <h2 class="uk-modal-title">EOSC data transfer service</h2>
                      </div>
                      <div class="uk-width-1-1 uk-margin-top uk-margin-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <div class="uk-text-center">
                          <button *ngIf="!accessToken" class="uk-button uk-button-default" (click)="checkin()">Login
                          </button>
                      </div>
                  </div>
                  <div *ngIf="accessToken" class="">
                      <div class="uk-width-1-1  uk-text-center">
                          <h2 class="uk-modal-title">EOSC data transfer service</h2>
                      </div>
                      <div class="uk-width-1-1 uk-margin-top uk-margin-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <div class="uk-grid uk-child-width-1-2 uk-grid-divider">
                          <div class="uk-first-column">
                              <p class="uk-text-meta">Lorem ipsum ....</p>
                              <div input type="select" [(value)]="selectedSourceUrl" placeholder="Zenodo DOI URL" hint="Select..."
                                   [options]="sourceUrls" (valueChange)="this.parse()"></div>
                            <div class="uk-margin-top">
                                <div>Files to be transfered:</div>
                                <ul>
                                    
                                    <li *ngFor=" let element of this.downloadElements">{{ element.filename}}
                                    </li>
                                </ul>
                            </div>                              
                          </div>
                          <div>
                              <p class="uk-text-meta">Lorem ipsum ....</p>
                              <div input type="select" [(value)]="selectedDestination" placeholder="Storage" hint="Select..."
                                   [options]="destinationOptions"></div>
                              <div input [(value)]="destinationPath" placeholder="Give a destination path..."
                                   [validators]="validators[0]" class="uk-margin-top"></div>
                              <button (click)="transfer()"
                                      class="uk-button uk-button-primary uk-margin-top"
                                      [class.uk-disabled]="destinationPath.length == 0 || status == 'success' ||status == 'loading' ">
                                  >> Transfer to Storage
                              </button>
                          </div>
                      </div>
                      <div *ngIf="status == 'loading'" class="uk-flex uk-flex-center uk-text-muted">
                          <div>
                        <span class="uk-icon uk-spinner">
                        <svg width="60" height="60" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
                             data-svg="spinner"><circle
                            fill="none" stroke="#000" cx="15" cy="15" r="14" style="stroke-width: 2px;"></circle></svg>
                        </span>
                          </div>
                      </div>
                      <div *ngIf="message" class="uk-width-1-1 uk-alert"
                           [class.uk-alert-success]="status && status.indexOf('error')==-1"
                           [class.uk-alert-error]="status && status.indexOf('error')!=-1"
                           [innerHTML]="message">
                      </div>

                      <div class="uk-width-1-1 uk-text-right "
                           [class.uk-invisible]="!(status == 'success' || status.indexOf('error')!=-1)">
                          <button class="uk-button uk-button-default uk-margin-top " (click)="close()">Close</button>
                      </div>
                  </div>
              </div>

          </div>
      </div>


  `
})
export class EGIDataTransferComponent {
  subscriptions = [];
  accessToken =  null;
  @Input() dois;
  loginURL = "http://rudie.di.uoa.gr:8580/openid_connect_login"
  sourceUrls = []
  selectedSourceUrl = null;
  destinationPath = "";
  destinationOptions = [{label: "EGI storage", value: { url: "https://egi.storage.eu", id: "egi" } }];
  selectedDestination = null;

  downloadElements = null;
  @Input() isOpen = false;
  APIURL = "https://virtserver.swaggerhub.com/thebe14/eosc-future-data-transfer/1.0.0";
  status: "loading" | "success" | "errorParser" | "errorUser" | "errorTransfer" | "init" = "init";
  message;
  validators = [Validators.required, StringUtils.urlValidator()];
  constructor(private http: HttpClient, private location: Location,  private _router: Router) {

  }

  ngOnInit() {
    console.log(  window.location.href)
    console.log(COOKIE.getCookie("EGIAccessToken"))
    this.accessToken = COOKIE.getCookie("EGIAccessToken");
    for(let doi of this.dois){
      console.log(doi)
      if(doi.indexOf("zenodo.")!=-1){
        this.sourceUrls.push("https://doi.org/" + doi);
      }


    }
    this.selectedSourceUrl = this.sourceUrls[0];
    this.selectedDestination = this.destinationOptions[0].value;
    this.parse();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription instanceof Subscriber) {
        subscription.unsubscribe();
      }
    });

  }
  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
    // this.downloadElements = [];
    this.destinationPath = "";
    this.selectedDestination = this.destinationOptions[0].value;
    this.selectedSourceUrl = this.sourceUrls[0];
    this.message = null;
    this.status = "init";
    if(this._router.url.indexOf("&egiTransfer")){
      this.location.go(this._router.url.split("&egiTransfer")[0]);
    }
    
  }
  checkin(){
    window.location.href = this.loginURL+"?redirect="+ encodeURIComponent(window.location.href + "&egiTransfer=t");

  }
  parse(){

        this.subscriptions.push(this.http.get(this.APIURL + "/parser/zenodo?source=" + this.selectedSourceUrl ).subscribe(
          res => {
            console.log(res)
            this.downloadElements = [];
            for( let element of res['elements']){
              //TODO remove
              element.downloadUrl = "https://zenodo.org/record/6354460/files/preprocessed_data/weights/atlas_EUCP_ICTP_CMIP6_REA_tas_weights.nc?download=1";
              //TODO can we use element.name instead?
              element.filename = this.parseFilename(element.downloadUrl);
              console.log(element.filename)
              this.downloadElements.push(element)
            }

            console.log(this.downloadElements)
            // this.transfer();

          }, error => {
            this.status = "errorParser";
            this.message = "Couldn't get download URLs from zenodo";
            UIkit.notification("Couldn't get download URLs from zenodo", {
              status: 'error',
              timeout: 6000,
              pos: 'bottom-right'
            });

          }
        ));

  }

  transfer() {
    console.log(this.selectedDestination)
  this.status = "loading";
  let headers = new HttpHeaders({'Authorization': 'Bearer '+this.accessToken});
  this.subscriptions.push(this.http.get(this.APIURL + "/user/info", {headers: headers}).subscribe(
    res => {
      console.log(res)
    let body = {
      "files": [],
      "params": {
        "priority": 0,
        "overwrite": true,
        "retry": 3
      }
    };
      console.log(this.selectedDestination)
    for (let element of this.downloadElements) {

     let file = {
        "sources": [
        {
          "url": element['downloadUrl']
        }
      ],
        "destinations": [
        {
          "url": this.selectedDestination.url + this.destinationPath + element.filename
        }
      ],
        "filesize": element['size']
      };
     //TODO priority? checksum?
     body.files.push(file);
    }

    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.accessToken});
    this.subscriptions.push(this.http.post(this.APIURL + "/transfer" ,body, {headers: headers}).subscribe(
      res => {
        console.log(res)
        UIkit.notification('Data transfer has began! ', {
          status: 'success',
          timeout: 6000,
          pos: 'bottom-right'
        });

        this.status = "success"
        this.message = `
            <div class="uk-text-large uk-margin-bottom">Data transfer has began!</div>
            <div>Transfering ` + this.downloadElements.length + ` files to <a href="`+ this.selectedDestination.url + this.destinationPath + `" target=_blank> EGI Storage</a>: 
            <ul>           
`;
        // TODO LATER we can call status for each file and see if the transfer has been complete
        for(let element of this.downloadElements){
          console.log(element)
          this.message += ` <li> `+ element.filename+ `</li>  `;

        }
        this.message += `
        </ul>  
          </div>`

      }, error => {
        this.status = "errorTransfer";
        this.message = "Couldn't transfer files";
        UIkit.notification("Couldn't transfer files", {
          status: 'error',
          timeout: 6000,
          pos: 'bottom-right'
        });

      }
    ));
    }, error => {
      this.status = "errorUser";
      this.message = "User can't be authenticated!";
      UIkit.notification("User can't be authenticated!", {
        status: 'error',
        timeout: 6000,
        pos: 'bottom-right'
      });

    }
  ));
  }
  private parseFilename(url){
    let filename = url.split("/")[url.split("/").length - 1];
    return filename.split("?")[0];
  }

}
