import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdvancedSearchOrganizationsRoutingModule} from './advancedSearchOrganizations-routing.module';
import {OpenaireAdvancedSearchOrganizationsComponent} from './advancedSearchOrganizations.component';
import {FreeGuard} from '../../openaireLibrary/login/freeGuard.guard';
import {AdvancedSearchOrganizationsModule} from '../../openaireLibrary/searchPages/advanced/advancedSearchOrganizations.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdvancedSearchOrganizationsModule,
   AdvancedSearchOrganizationsRoutingModule

  ],
  declarations: [
    OpenaireAdvancedSearchOrganizationsComponent
   ],
  providers:[FreeGuard],
  exports: [
    OpenaireAdvancedSearchOrganizationsComponent
     ]
})
export class LibAdvancedSearchOrganizationsModule { }
