import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';


import {NavigationBarModule} from './openaireLibrary/sharedComponents/navigationBar.module';
import {CookieLawModule} from './openaireLibrary/sharedComponents/cookie-law/cookie-law.module';

import {BottomModule} from './openaireLibrary/sharedComponents/bottom.module';
import {FeedbackModule} from './openaireLibrary/sharedComponents/feedback/feedback.module';
import {EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
import {ErrorModule} from './openaireLibrary/error/error.module';

import {OpenaireErrorPageComponent} from './error/errorPage.component';
import {AppRoutingModule} from './app-routing.module';
import {AggregatorNavBarComponent} from "./utils/aggregatorNavBar.component";

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
   EnvironmentSpecificResolver

 ],
 bootstrap: [AppComponent]
})

export class AppModule {}
