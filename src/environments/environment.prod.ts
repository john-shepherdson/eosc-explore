import {EnvProperties} from "../app/openaireLibrary/utils/properties/env-properties";

export let properties: EnvProperties = {
  environment: "production",
  adminToolsPortalType: "aggregator",
  dashboard: "explore",
  enablePiwikTrack: true,
  useCache: false,
  useLongCache: true,
  showAddThis: true,
  metricsAPIURL: "https://services.openaire.eu/usagestats/",
  framesAPIURL: "https://www.openaire.eu/stats3/",
  statisticsAPIURL: "https://beta.services.openaire.eu/stats-api/",
  statisticsFrameAPIURL: "https://www.openaire.eu/stats/",
  statisticsFrameNewAPIURL: "https://services.openaire.eu/stats/",
  useNewStatistisTool: false,
  claimsAPIURL: "https://services.openaire.eu/claims/rest/claimsService/",
  searchAPIURLLAst: "https://services.openaire.eu/search/v2/api/",
  searchResourcesAPIURL: "https://services.openaire.eu/search/v2/api/resources",
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
  piwikSiteId: "109",
  loginUrl: "https://services.openaire.eu/uoa-user-management/openid_connect_login",
  
  userInfoUrl: " https://services.openaire.eu/uoa-user-management/api/users/getUserInfo?accessToken=",
  
  logoutUrl: "https://aai.openaire.eu/proxy/saml2/idp/SingleLogoutService.php?ReturnTo=",
  
  cookieDomain: ".openaire.eu",
  
  feedbackmail: "feedback@openaire.eu",
  
  cacheUrl: "https://explore.openaire.eu/cache/get?url=",
  
  datasourcesAPI: "https://services.openaire.eu/openaire/ds/search/",
  
  adminToolsAPIURL: "https://services.openaire.eu/uoa-admin-tools/",
  
  adminToolsCommunity: "openaire",
  contextsAPI: "https://services.openaire.eu/openaire/context",
  
  communityAPI: "https://services.openaire.eu/openaire/community/",
  
  csvLimit: 2000,
  pagingLimit: 20,
  resultsPerPage: 10,

  "baseLink" : "/",
  "domain": "https://explore.openaire.eu",
  
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
  widgetLink: "https://www.openaire.eu/index.php?option=com_openaire&view=widget&format=raw&projectId=",
  claimsInformationLink: "https://www.openaire.eu/linking",
  lastIndexUpdate: "2020-06-15",
  indexInfoAPI: "https://services.openaire.eu/openaire/info/",
  
  depositLearnHowPage: "/participate/deposit/learn-how",
  depositSearchPage: "/participate/deposit/search",
  altMetricsAPIURL: "https://api.altmetric.com/v1/doi/",
  reCaptchaSiteKey: "6LezhVIUAAAAAOb4nHDd87sckLhMXFDcHuKyS76P",
  b2noteAPIURL: "http://b2note-dev.bsc.es/"
};
