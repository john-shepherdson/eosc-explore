import {Component} from '@angular/core';
import {ActivatedRoute}                  from '@angular/router';
import {EnvProperties}                           from '../../openaireLibrary/utils/properties/env-properties';
import {Subscriber} from "rxjs";

@Component({
    selector: 'openaire-claims-admin',
    template: `
    <claims-admin *ngIf="claimsInfoURL && userInfoURL" [claimsInfoURL]=claimsInfoURL [userInfoURL]="userInfoURL">
    </claims-admin>

    `,

})
export class OpenaireClaimsAdminComponent {

  claimsInfoURL:string;
  userInfoURL: string;
  sub;
 constructor (private route: ActivatedRoute) {
  }
  ngOnDestroy() {
    if (this.sub instanceof Subscriber) {
      this.sub.unsubscribe();
    }
  }

  public ngOnInit() {
    this.sub = this.route.data
        .subscribe((data: { envSpecific: EnvProperties }) => {
           this.claimsInfoURL = data.envSpecific.claimsInformationLink;
          this.userInfoURL = data.envSpecific.userInfoUrl;
        });
  }
}
