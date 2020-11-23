import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';


import {NavigationBarModule} from './openaireLibrary/sharedComponents/navigationBar.module';
import {CookieLawModule} from './openaireLibrary/sharedComponents/cookie-law/cookie-law.module';

import {BottomModule} from './openaireLibrary/sharedComponents/bottom.module';
import {FeedbackModule} from './openaireLibrary/sharedComponents/feedback/feedback.module';
import {EnvironmentSpecificResolver} from './openaireLibrary/utils/properties/environmentSpecificResolver';
import {ErrorModule} from './openaireLibrary/error/error.module';

import {OpenaireErrorPageComponent} from './error/errorPage.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpInterceptorService} from "./openaireLibrary/http-interceptor.service";
import {ErrorInterceptorService} from "./openaireLibrary/error-interceptor.service";
import {DEFAULT_TIMEOUT, TimeoutInterceptor} from "./openaireLibrary/timeout-interceptor.service";

@NgModule({

  imports: [
    SharedModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
    ErrorModule,
    NavigationBarModule, FeedbackModule, BottomModule,
    CookieLawModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule
  ],
  declarations: [AppComponent, OpenaireErrorPageComponent],
  exports: [AppComponent],
  providers: [
    EnvironmentSpecificResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    [{provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true}],
    [{provide: DEFAULT_TIMEOUT, useValue: 30000}]
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
