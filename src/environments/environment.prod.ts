// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The eoscInfo of which env maps to which file can be found in `.angular-cli.json`.

import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";
import {common, commonProd} from "../app/openaireLibrary/utils/properties/environments/environment";

let props: EnvProperties = {
  environment: "production",
  adminToolsPortalType: "eosc",
  dashboard: "eosc",
  enablePiwikTrack: true,
  useCache: false,
  useLongCache: true,
  showAddThis: true,
  enableEoscDataTransfer: true,
  statisticsFrameNewAPIURL: "https://services.openaire.eu/stats-tool/",
  useNewStatistisTool: true,
  piwikSiteId: "594",
  adminToolsCommunity: "eosc",
  useHelpTexts:false,
  domain: "https://explore.eosc-beyond.eu",
  reCaptchaSiteKey: null,
  footerGrantText : "",
  eoscDataTransferAPI : "https://eosc-data-transfer.vm.fedcloud.eu",
  eoscDataTransferLoginUrl:"https://explore.eosc-beyond.eu/egi-login-service/openid_connect_login"
};

export let properties: EnvProperties = {
  ...common, ...commonProd, ...props
}