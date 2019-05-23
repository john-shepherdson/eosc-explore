import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import {NavigationBarModule} from './openaireLibrary/sharedComponents/navigationBar.module';
import { CookieLawModule } from './openaireLibrary/sharedComponents/cookie-law/cookie-law.module';

import {BottomModule} from './openaireLibrary/sharedComponents/bottom.module';
import {FeedbackModule} from './openaireLibrary/sharedComponents/feedback/feedback.module';
import { EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
//import { EnvironmentSpecificService, REQUEST_TOKEN} from './openaireLibrary/utils/properties/environment-specific.service';

import { ErrorModule} from './openaireLibrary/error/error.module';

import { OpenaireErrorPageComponent } from './error/errorPage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

  imports: [
    SharedModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
ErrorModule,
NavigationBarModule, FeedbackModule, BottomModule,
    CookieLawModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule
  ],
  declarations: [ AppComponent, OpenaireErrorPageComponent],
  exports: [ AppComponent ],
 providers:[
   /*{
     provide: REQUEST_TOKEN,
     useClass: EnvironmentSpecificService
   },*/
   EnvironmentSpecificResolver

 ],
 bootstrap: [AppComponent]
})
//
export class AppModule {}
