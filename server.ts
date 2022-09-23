import 'zone.js/node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import {Prometheus} from "./prometheus";
import {Counter} from "prom-client";
import {REQUEST, RESPONSE} from "./src/app/openaireLibrary/utils/tokens";

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  server.use(compression());
  const distFolder = join(process.cwd(), 'dist/eosc/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  
  const prometheus: Prometheus = new Prometheus();
  
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));
  
  server.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(prometheus.register.metrics());
  });
  
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    let start = new Date();
    let counter: Counter = prometheus.counters.get(req.path);
    if(counter !== undefined) {
      counter.inc(1, new Date());
      res.render(indexHtml, {
        req, providers: [
          {
            provide: APP_BASE_HREF,
            useValue: req.baseUrl
          },
          {
            provide: REQUEST, useValue: (req)
          },
          {
            provide: RESPONSE, useValue: (res)
          }
        ]
      });
      // event triggers when express is done sending response
      res.on('finish', function() {
        console.log(new Date().getTime() - start.getTime());
      });
    } else {
      res.render(indexHtml, {
        req, providers: [
          {
            provide: APP_BASE_HREF,
            useValue: req.baseUrl
          },
          {
            provide: REQUEST, useValue: (req)
          },
          {
            provide: RESPONSE, useValue: (res)
          }
        ]
      });
    }
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
