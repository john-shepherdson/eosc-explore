//import {MaterialModule} from '@angular/material';
import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MainSearchModule} from '../../openaireLibrary/searchPages/find/mainSearch.module';

import { OpenaireSearchComponent } from './search.component';
import { MainSearchRoutingModule } from './mainSearch-routing.module';

@NgModule({
  imports: [ MainSearchRoutingModule, MainSearchModule],
  declarations:[OpenaireSearchComponent],
  exports:[OpenaireSearchComponent]
})
export class LibMainSearchModule { }
