import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import {OpenaireUserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserModule} from '../openaireLibrary/login/user.module';

import {PreviousRouteRecorder} from '../openaireLibrary/utils/piwik/previousRouteRecorder.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    UserRoutingModule, UserModule

  ],
  providers:[PreviousRouteRecorder],
  declarations: [
OpenaireUserComponent

]
})
export class LibUserModule { }
