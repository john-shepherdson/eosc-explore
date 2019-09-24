import {Component} from '@angular/core';

@Component({
    selector: 'openaire-dataset',
    template: `<result-landing type="dataset" [activeTab]="'References'"></result-landing>`,
 })
export class OpenaireDatasetComponent{
  constructor (  ) {

  }

  ngOnInit() {
}



}
