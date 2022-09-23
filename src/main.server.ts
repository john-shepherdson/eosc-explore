/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
*/
import '@angular/localize/init';

import { enableProdMode } from '@angular/core';

import {properties} from './environments/environment';

if (properties.environment !== "development") {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule } from '@angular/platform-server';
