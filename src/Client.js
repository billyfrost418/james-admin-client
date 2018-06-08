const httpClient = require('./http-client');

const domainsApi = require('./api/domains');
const quotaApi = require('./api/quota');
const domainMappingsApi = require('./api/domain_mappings');
const groupApi = require('./api/group');
const usersApi = require('./api/users');
const forwardApi = require('./api/forward');

class Client {
  constructor(options) {
    this.httpClient = httpClient({
      baseUrl: options.apiUrl,
      auth: {
        type: 'jwt',
        token: options.token
      }
    });

    domainsApi(this);
    quotaApi(this);
    domainMappingsApi(this);
    groupApi(this);
    usersApi(this);
    forwardApi(this);
  }

  api(config) {
    return this.httpClient(config).then(resp => resp.data);
  }
}

module.exports = Client;
