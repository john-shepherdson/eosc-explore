import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnvProperties} from '../../openaireLibrary/utils/properties/env-properties';
import {Subscriber} from "rxjs";



@Component({
    selector: 'openaire-my-claims',
    template: `
    <my-claims *ngIf="userInfoURL && claimsInfoURL" [claimsInfoURL]=claimsInfoURL [userInfoURL]="userInfoURL">
</my-claims>
`

})
 export class OpenaireMyClaimsComponent {
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
