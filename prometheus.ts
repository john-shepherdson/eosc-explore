import * as prom from 'prom-client';


export class Prometheus {

  register = new prom.Registry();

  counters: Map<string, prom.Counter> = new Map<string, prom.Counter>([
    ["/", new prom.Counter({
      name: 'home',
      help: 'Home Page Counter',
      registers: [this.register]
    })],
    ["/search/publication", new prom.Counter({
      name: 'search_publication',
      help: 'Publication Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/dataset", new prom.Counter({
      name: 'search_dataset',
      help: 'Dataset Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/software", new prom.Counter({
      name: 'search_software',
      help: 'Software Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/other", new prom.Counter({
      name: 'search_other',
      help: 'Other Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/project", new prom.Counter({
      name: 'search_project',
      help: 'Project Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/dataprovider", new prom.Counter({
      name: 'search_dataprovider',
      help: 'DataProvider Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/organization", new prom.Counter({
      name: 'search_organization',
      help: 'organization Landing Page Counter',
      registers: [this.register]
    })],
    ["/search/find", new prom.Counter({
      name: 'search_find',
      help: 'Main Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/publications", new prom.Counter({
      name: 'search_find_publications',
      help: 'Publications Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/datasets", new prom.Counter({
      name: 'search_find_datasets',
      help: 'Datasets Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/software", new prom.Counter({
      name: 'search_find_software',
      help: 'Software Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/other", new prom.Counter({
      name: 'search_find_other',
      help: 'Other Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/projects", new prom.Counter({
      name: 'search_find_projects',
      help: 'Projects Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/dataproviders", new prom.Counter({
      name: 'search_find_dataproviders',
      help: 'DataProviders Search Page Counter',
      registers: [this.register]
    })],
    ["/search/find/organizations", new prom.Counter({
      name: 'search_find_organizations',
      help: 'Organizations Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/publications", new prom.Counter({
      name: 'search_advanced_publications',
      help: 'Publications Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/datasets", new prom.Counter({
      name: 'search_advanced_datasets',
      help: 'Datasets Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/software", new prom.Counter({
      name: 'search_advanced_software',
      help: 'Software Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/other", new prom.Counter({
      name: 'search_advanced_other',
      help: 'Other Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/projects", new prom.Counter({
      name: 'search_advanced_projects',
      help: 'Projects Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/dataproviders", new prom.Counter({
      name: 'search_advanced_dataproviders',
      help: 'DataProviders Advanced Search Page Counter',
      registers: [this.register]
    })],
    ["/search/advanced/organizations", new prom.Counter({
      name: 'search_advanced_organizations',
      help: 'Organizations Advanced Search Page Counter',
      registers: [this.register]
    })]
  ]);
}
