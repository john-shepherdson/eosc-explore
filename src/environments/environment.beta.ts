// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The eoscInfo of which env maps to which file can be found in `.angular-cli.json`.

import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";
import {common, commonBeta} from "../app/openaireLibrary/utils/properties/environments/environment";

let props: EnvProperties = {
  environment: "beta",
  adminToolsPortalType: "eosc",
  dashboard: "eosc",
  enablePiwikTrack: true,
  useCache: false,
  useLongCache: true,
  showAddThis: true,
  enableEoscDataTransfer: true,
  statisticsAPIURL: "https://services.openaire.eu/stats-api/",
  statisticsFrameNewAPIURL: "https://services.openaire.eu/stats-tool/",
  searchAPIURLLAst: "https://services.openaire.eu/search/v2/api/",
  searchResourcesAPIURL: "https://services.openaire.eu/search/v2/api/resources",
  csvAPIURL: "https://services.openaire.eu/search/v2/api/reports",
  utilsService: "https://explore.openaire.eu/utils-service",
  vocabulariesAPI: "https://services.openaire.eu/provision/mvc/vocabularies/",
  piwikSiteId: "594",
  feedbackmail: "feedback@openaire.eu",
  cacheUrl: "https://explore.openaire.eu/cache/get?url=",
  datasourcesAPI: "https://services.openaire.eu/openaire/ds/search/",
  adminToolsCommunity: "eosc",
  adminToolsAPIURL: "https://services.openaire.eu/uoa-admin-tools/",
  useHelpTexts: false,
  contextsAPI: "https://services.openaire.eu/openaire/context",
  communityAPI: "https://services.openaire.eu/openaire/community/",
  domain: "https://explore.sandbox.eosc-beyond.eu",
  lastIndexInformationLink: "https://openaire.eu/aggregation-and-content-provision-workflows",
  widgetLink: "https://openaire.eu/index.php?option=com_openaire&view=widget&format=raw&projectId=",
  claimsInformationLink: "https://www.openaire.eu/linking",
  indexInfoAPI: "https://services.openaire.eu/openaire/info/",
  reCaptchaSiteKey: null,
  footerGrantText: "",
  eoscDataTransferAPI : "https://eosc-data-transfer.vm.fedcloud.eu",
  eoscDataTransferLoginUrl:"https://explore.sandbox.eosc-beyond.eu/egi-login-service/openid_connect_login"
};

export let properties: EnvProperties = {
  ...common, ...commonBeta, ...props
}