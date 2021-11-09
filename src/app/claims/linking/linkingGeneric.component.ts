import {Component} from '@angular/core';
import {properties} from "../../../environments/environment";

@Component({
    selector: 'openaire-linking-generic',
    template: `<linking-generic pageTitle="Linking" [piwikSiteId]="piwikSiteId"></linking-generic>`

})
export class OpenaireLinkingComponent {
    piwikSiteId = properties.piwikSiteId;


}
