
import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import * as express from 'express';
import * as compression from 'compression';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import {AppServerModule} from "./src/main.server";
import {REQUEST, RESPONSE} from "./src/app/openaireLibrary/utils/tokens";
import {Prometheus} from "./prometheus";
import {Counter} from "prom-client";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.use(compression());
  const distFolder = join(process.cwd(), 'dist/eosc/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index.html');

  const prometheus: Prometheus = new Prometheus();

  const commonEngine = new CommonEngine();

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

  server.get('/health-check', async (_req, res, _next) => {
    var uptime = process.uptime();
    const date = new Date(uptime*1000);
    const days = date.getUTCDate() - 1,
      hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();


    const healthcheck = {
      uptime: days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds",
      message: 'OK',
      timestamp: new Date()
    };
    try {
      res.send(healthcheck);
    } catch (error) {
      healthcheck.message = error;
      res.status(503).send();
    }
  });

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    let start = new Date();
    let counter: Counter = prometheus.counters.get(req.path);

    if(counter !== undefined) {
      counter.inc(1, new Date());

      commonEngine.render({
        bootstrap: AppServerModule,
        inlineCriticalCss: false,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl },
          {
            provide: REQUEST, useValue: (req)
          },
          {
            provide: RESPONSE, useValue: (res)
          }
        ],
      })
      .then((html) => {
        // event triggers when express is done sending response
        res.on('finish', function() {
          console.log(new Date().getTime() - start.getTime());
        });
        res.status(200).send(html);
      })
      .catch((err) => res.status(500).send('Error during SSR'))
    } else {
      commonEngine.render({
        bootstrap: AppServerModule,
        inlineCriticalCss: false,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl },
          {
            provide: REQUEST, useValue: (req)
          },
          {
            provide: RESPONSE, useValue: (res)
          }
        ],
      })
      .then((html) => res.status(200).send(html))
      .catch((err) => res.status(500).send('Error during SSR'))
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

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