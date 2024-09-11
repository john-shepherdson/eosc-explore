// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The eoscInfo of which env maps to which file can be found in `.angular-cli.json`.

import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";
import {common, commonDev} from "../app/openaireLibrary/utils/properties/environments/environment";

let props: EnvProperties = {
  adminToolsPortalType: "eosc",
  dashboard: "eosc",
  enablePiwikTrack: false,
  useCache: false,
  useLongCache: false,
  showAddThis: true,
  enableEoscDataTransfer: true,
  statisticsFrameNewAPIURL: "https://services.openaire.eu/stats-tool/",
  searchAPIURLLAst: "http://beta.services.openaire.eu/search/v2/api/",
  searchResourcesAPIURL: "http://services.openaire.eu/search/v2/api/resources",
  csvAPIURL: "https://services.openaire.eu/search/v2/api/reports",
  utilsService: "http://dl170.madgik.di.uoa.gr:8000",
  vocabulariesAPI: "https://dev-openaire.d4science.org/provision/mvc/vocabularies/",
  piwikSiteId: "594",
  cacheUrl: "http://dl170.madgik.di.uoa.gr:3000/get?url=",
  adminToolsCommunity: "eosc",
  adminToolsAPIURL: "http://duffy.di.uoa.gr:19280/uoa-admin-tools/",
  useHelpTexts: false,
  datasourcesAPI: "https://beta.services.openaire.eu/openaire/ds/search/",
  contextsAPI: "https://dev-openaire.d4science.org/openaire/context",
  communityAPI: "https://dev-openaire.d4science.org/openaire/community/",
  domain:"https://explore.eosc-beyond.eu",
  lastIndexInformationLink: "https://www.openaire.eu/aggregation-and-content-provision-workflows",
  widgetLink: "https://beta.openaire.eu/index.php?option=com_openaire&view=widget&format=raw&projectId=",
  claimsInformationLink: "https://www.openaire.eu/linking-beta",
  indexInfoAPI: "https://beta.services.openaire.eu/openaire/info/",
  reCaptchaSiteKey: null,
  footerGrantText : "This OpenAIRE gateway is part of a project that has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreements No. 777541 and 101017452",
  eoscDataTransferAPI : "https://eosc-data-transfer.test.fedcloud.eu",
  eoscDataTransferLoginUrl:"http://rudie.di.uoa.gr:8580/openid_connect_login"
};

export let properties: EnvProperties = {
  ...common, ...commonDev, ...props
}