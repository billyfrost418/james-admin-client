# james-admin-client

> JS library to help configuring James through [web administration APIs](https://github.com/linagora/james-project/blob/master/src/site/markdown/server/manage-webadmin.md)

[![Build Status](https://travis-ci.org/linagora/james-admin-client.svg?branch=master)](https://travis-ci.org/linagora/james-admin-client)

## Installation

Bower:

`bower install james-admin-client`

NPM and Yarn:

`npm install @linagora/james-admin-client`

`yarn add https://github.com/linagora/james-admin-client.git`

## Usage

```javascript
const { Client } = require('@linagora/james-admin-client');

const options = {
  token: '...',
  apiUrl: 'http://james.yourserver.com'
};
const client = new Client(options);

client.getQuota().then((response) => {
  console.log(response);
}, (err) => {
  console.log(err);
});
```

On browser:

```javascript
const james = window.james;
const Client = james.Client;

...
```

## Release

To release new patch version, run this command on `master` branch:

`gulp release`

New minor version:

`gulp release --minor`

New major version:

`gulp release --major`

## Licence

[Affero GPL v3](http://www.gnu.org/licenses/agpl-3.0.html)
