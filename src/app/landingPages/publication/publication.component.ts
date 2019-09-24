import {Component} from '@angular/core';

@Component({
  selector: 'openaire-publication',
  template: `
    <result-landing type="publication" [activeTab]="'References'"></result-landing>`,
})
export class OpenairePublicationComponent {
  constructor() {

  }

  ngOnInit() {
  }


}
