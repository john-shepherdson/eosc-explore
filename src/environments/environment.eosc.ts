import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";

export let properties: EnvProperties = {
  environment: "beta",
  adminToolsPortalType: "eosc",
  dashboard: "aggregator",
  enablePiwikTrack: true,
  useCache: false,
  useLongCache: true,
  showAddThis: true,
  enableEoscDataTransfer: true,
  framesAPIURL: "https://beta.openaire.eu/stats3/",
  statisticsAPIURL: "https://beta.services.openaire.eu/stats-api/",
  statisticsFrameAPIURL: "https://beta.openaire.eu/stats/",
  statisticsFrameNewAPIURL: "https://beta.services.openaire.eu/stats-tool/",
  useNewStatistisTool: true,
  claimsAPIURL: "https://beta.services.openaire.eu/claims/rest/claimsService/",
  searchAPIURLLAst: "https://beta.services.openaire.eu/search/v2/api/",
  searchResourcesAPIURL: "https://beta.services.openaire.eu/search/v2/api/resources",
  openCitationsAPIURL: "https://services.openaire.eu/opencitations/getCitations?id=",
  csvAPIURL: "https://services.openaire.eu/search/v2/api/reports",
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
  fairSharingURL: "https://fairsharing.org/",
  eoscMarketplaceURL: "https://marketplace.eosc-portal.eu/services/",
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
  utilsService: "https://explore.openaire.eu/utils-service",

  vocabulariesAPI: "https://services.openaire.eu/provision/mvc/vocabularies/",

  piwikBaseUrl: "https://analytics.openaire.eu/piwik.php?idsite=",
  piwikSiteId: "594",

  loginUrl: "https://services.openaire.eu/login-service/openid_connect_login",
  userInfoUrl: "https://services.openaire.eu/login-service/userInfo",
  logoutUrl: "https://services.openaire.eu/login-service/openid_logout",
  cookieDomain: ".openaire.eu",

  feedbackmail: "feedback@openaire.eu",

  cacheUrl: "https://explore.openaire.eu/cache/get?url=",

  datasourcesAPI: "https://services.openaire.eu/openaire/ds/search/",

  adminToolsCommunity: "aggregator",
  adminToolsAPIURL: "https://services.openaire.eu/uoa-admin-tools/",
  useHelpTexts:false,

  contextsAPI: "https://services.openaire.eu/openaire/context",

  communityAPI: "https://services.openaire.eu/openaire/community/",

  csvLimit: 2000,
  pagingLimit: 20,
  resultsPerPage: 10,

  "baseLink" : "/",
  "domain": "https://explore.eosc-portal.eu",

  searchLinkToResult: "/search/result?id=",
  searchLinkToPublication: "/search/publication?articleId=",
  searchLinkToProject: "/search/project?projectId=",
  searchLinkToDataProvider: "/search/dataprovider?datasourceId=",
  searchLinkToService: "/search/service?serviceId=",
  searchLinkToDataset: "/search/dataset?datasetId=",
  searchLinkToSoftwareLanding: "/search/software?softwareId=",
  searchLinkToOrp: "/search/other?orpId=",
  searchLinkToOrganization: "/search/organization?organizationId=",

  searchLinkToPublications: "/search/find/publications",
  searchLinkToDataProviders: "/search/find/dataproviders",
  searchLinkToServices: "/search/find/services",
  searchLinkToProjects: "/search/find/projects",
  searchLinkToDatasets: "/search/find/datasets",
  searchLinkToSoftware: "/search/find/software",
  searchLinkToOrps: "/search/find/other",
  searchLinkToOrganizations: "/search/find/organizations",
  searchLinkToCompatibleDataProviders: "/search/content-providers",
  searchLinkToEntityRegistriesDataProviders: "/search/entity-registries",
  searchLinkToJournals: "/search/journals",
  searchLinkToResults: "/search/find/research-outcomes",

  searchLinkToAdvancedPublications: "/search/advanced/publications",
  searchLinkToAdvancedProjects: "/search/advanced/projects",
  searchLinkToAdvancedDatasets: "/search/advanced/datasets",
  searchLinkToAdvancedSoftware: "/search/advanced/software",
  searchLinkToAdvancedOrps: "/search/advanced/other",
  searchLinkToAdvancedDataProviders: "/search/advanced/dataproviders",
  searchLinkToAdvancedServices: "/search/advanced/services",
  searchLinkToAdvancedOrganizations: "/search/advanced/organizations",
  searchLinkToAdvancedResults: "/search/advanced/research-outcomes",

  errorLink: "/error",

  lastIndexInformationLink: "https://beta.openaire.eu/aggregation-and-content-provision-workflows",
  showLastIndexInformationLink: true,
  widgetLink: "https://beta.openaire.eu/index.php?option=com_openaire&view=widget&format=raw&projectId=",
  claimsInformationLink: "https://www.openaire.eu/linking",
  lastIndexUpdate: "2020-06-15",
  indexInfoAPI: "https://beta.services.openaire.eu/openaire/info/",

  depositLearnHowPage: "/participate/deposit/learn-how",
  depositSearchPage: "/participate/deposit/search",
  altMetricsAPIURL: "https://api.altmetric.com/v1/doi/",
  reCaptchaSiteKey: null,
  footerGrantText : "This OpenAIRE gateway is part of a project that has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreements No. 777541 and 101017452"

};
