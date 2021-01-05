// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";

export let properties: EnvProperties = {
  environment: "development",
  adminToolsPortalType: "aggregator",
  dashboard: "explore",
  enablePiwikTrack: false,
  useCache: true,
  useLongCache: true,
  showAddThis: true,
  metricsAPIURL: "https://beta.services.openaire.eu/usagestats/",
  framesAPIURL: "https://beta.openaire.eu/stats3/",
  statisticsAPIURL: "http://vatopedi.di.uoa.gr:8080/stats/",
  statisticsFrameAPIURL: "https://beta.openaire.eu/stats/",
  statisticsFrameNewAPIURL: "https://stats.madgik.di.uoa.gr/stats-api/",
  useNewStatistisTool: true,
  claimsAPIURL: "http://dl170.madgik.di.uoa.gr:8180/dnet-claims-service-2.0.0-SNAPSHOT/rest/claimsService/",
  searchAPIURLLAst: "http://beta.services.openaire.eu/search/v2/api/",
  searchResourcesAPIURL: "https://beta.services.openaire.eu/search/v2/api/resources",
  openCitationsAPIURL: "https://services.openaire.eu/opencitations/getCitations?id=",
  csvAPIURL: "https://beta.services.openaire.eu/search/v2/api/reports",
  searchCrossrefAPIURL: "https://api.crossref.org/works",
  searchDataciteAPIURL: "https://api.datacite.org/works",
  searchOrcidURL: "https://pub.orcid.org/v2.1/",
  orcidURL: "https://orcid.org/",
  doiURL: "https://dx.doi.org/",
  pmcURL: "http://europepmc.org/articles/",
  pmidURL: "https://www.ncbi.nlm.nih.gov/pubmed/",
  handleURL: "http://hdl.handle.net/",
  cordisURL: "http://cordis.europa.eu/projects/",
  openDoarURL: "http://v2.sherpa.ac.uk/id/repository/",
  r3DataURL: "http://service.re3data.org/repository/",
  sherpaURL: "http://sherpa.ac.uk/romeo/issn/",
  sherpaURLSuffix: "/",
  zenodo: "https://zenodo.org/",
  openAccess: "https://www.openaire.eu/support/faq#article-id-234",
  openAccessRepo: "https://www.openaire.eu/support/faq#article-id-310",
  fp7Guidlines: "https://www.openaire.eu/open-access-in-fp7-seventh-research-framework-programme",
  h2020Guidlines: "https://www.openaire.eu/oa-publications/h2020/open-access-in-horizon-2020",
  ercGuidlines: "http://erc.europa.eu/sites/default/files/document/file/ERC_Open_Access_Guidelines-revised_2014.pdf",
  helpdesk: "https://www.openaire.eu/support/helpdesk",
  helpdeskEmail: "helpdesk@openaire.eu",
  utilsService: "http://dl170.madgik.di.uoa.gr:8000",
  
  vocabulariesAPI: "https://dev-openaire.d4science.org/provision/mvc/vocabularies/",
  
  piwikBaseUrl: "https://analytics.openaire.eu/piwik.php?idsite=",
  piwikSiteId: "6",
  loginUrl: "http://dl170.madgik.di.uoa.gr:8180/dnet-login/openid_connect_login",
  
  userInfoUrl: "http://dl170.madgik.di.uoa.gr:8180/dnet-openaire-users-1.0.0-SNAPSHOT/api/users/getUserInfo?accessToken=",
  
  logoutUrl: "https://aai.openaire.eu/proxy/saml2/idp/SingleLogoutService.php?ReturnTo=",
  
  cookieDomain: ".di.uoa.gr",
  
  feedbackmail: "kostis30fylloy@gmail.com",
  
  cacheUrl: "http://dl170.madgik.di.uoa.gr:3000/get?url=",

  adminToolsCommunity: "aggregator",
  adminToolsAPIURL: "http://duffy.di.uoa.gr:8080/uoa-admin-tools/",
  useHelpTexts: false,
  datasourcesAPI: "https://beta.services.openaire.eu/openaire/ds/search/",
  contextsAPI: "https://dev-openaire.d4science.org/openaire/context",
  communityAPI: "https://dev-openaire.d4science.org/openaire/community/",
  
  csvLimit: 2000,
  pagingLimit: 20,
  resultsPerPage: 10,

  "baseLink" : "",
  "domain": "https://beta.explore.openaire.eu",
  
  searchLinkToResult: "/search/result?id=",
  searchLinkToPublication: "/search/publication?articleId=",
  searchLinkToProject: "/search/project?projectId=",
  searchLinkToDataProvider: "/search/dataprovider?datasourceId=",
  searchLinkToDataset: "/search/dataset?datasetId=",
  searchLinkToSoftwareLanding: "/search/software?softwareId=",
  searchLinkToOrp: "/search/other?orpId=",
  searchLinkToOrganization: "/search/organization?organizationId=",
  
  searchLinkToPublications: "/search/find/publications",
  searchLinkToDataProviders: "/search/find/dataproviders",
  searchLinkToProjects: "/search/find/projects",
  searchLinkToDatasets: "/search/find/datasets",
  searchLinkToSoftware: "/search/find/software",
  searchLinkToOrps: "/search/find/other",
  searchLinkToOrganizations: "/search/find/organizations",
  searchLinkToCompatibleDataProviders: "/search/content-providers",
  searchLinkToEntityRegistriesDataProviders: "/search/entity-registries",
  searchLinkToEntityRegistriesDataProvidersTable: "/search/entity-registries-table",
  searchLinkToJournals: "/search/journals",
  searchLinkToJournalsTable: "/search/journals-table",
  searchLinkToResults: "/search/find/research-outcomes",
  
  searchLinkToAdvancedPublications: "/search/advanced/publications",
  searchLinkToAdvancedProjects: "/search/advanced/projects",
  searchLinkToAdvancedDatasets: "/search/advanced/datasets",
  searchLinkToAdvancedSoftware: "/search/advanced/software",
  searchLinkToAdvancedOrps: "/search/advanced/other",
  searchLinkToAdvancedDataProviders: "/search/advanced/dataproviders",
  searchLinkToAdvancedOrganizations: "/search/advanced/organizations",
  searchLinkToAdvancedResults: "/search/advanced/research-outcomes",
  
  lastIndexInformationLink: "https://www.openaire.eu/aggregation-and-content-provision-workflows",
  showLastIndexInformationLink: true,
  widgetLink: "https://beta.openaire.eu/index.php?option=com_openaire&view=widget&format=raw&projectId=",
  claimsInformationLink: "https://www.openaire.eu/linking-beta",
  lastIndexUpdate: "2019-11-01",
  indexInfoAPI: "https://beta.services.openaire.eu/openaire/info/",
  
  depositLearnHowPage: "/participate/deposit/learn-how",
  depositSearchPage: "/participate/deposit/search",
  altMetricsAPIURL: "https://api.altmetric.com/v1/doi/",
  reCaptchaSiteKey: "6LcVtFIUAAAAAB2ac6xYivHxYXKoUvYRPi-6_rLu"
};
