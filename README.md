# API Gateway Request Parser

[![ver](https://img.shields.io/npm/v/@kdcio/api-gw-req?style=for-the-badge)](https://www.npmjs.com/package/@kdcio/api-gw-req)
[![build](https://img.shields.io/github/workflow/status/kdcio/api-gw-req/build?style=for-the-badge)](https://github.com/kdcio/api-gw-req/actions?query=workflow%3Abuild)
[![codecov](https://img.shields.io/codecov/c/github/kdcio/api-gw-req?style=for-the-badge)](https://codecov.io/gh/kdcio/api-gw-req)
[![size](https://img.shields.io/bundlephobia/min/@kdcio/api-gw-req?style=for-the-badge)](https://bundlephobia.com/result?p=@kdcio/api-gw-req)
[![license](https://img.shields.io/github/license/kdcio/api-gw-req?style=for-the-badge)](https://github.com/kdcio/api-gw-req/blob/master/LICENSE)

[![Maintainability](https://img.shields.io/codeclimate/maintainability/kdcio/api-gw-req?style=for-the-badge)](https://codeclimate.com/github/kdcio/api-gw-req) [![Code Issues](https://img.shields.io/codeclimate/issues/kdcio/api-gw-req?style=for-the-badge)](https://codeclimate.com/github/kdcio/api-gw-req/issues)
[![Technical Debt](https://img.shields.io/codeclimate/tech-debt/kdcio/api-gw-req?style=for-the-badge)](https://codeclimate.com/github/kdcio/api-gw-req/trends/technical_debt)

This module will parse the event object (that came from API Gateway) in lambda and create a new object with all unnecessary fields stripped out.

## Install

```bash
npm i @kdcio/api-gw-req
```

_Note: Breaking change from v0.1.x to 0.2.x: **pathParams** change to **params**._

## Usage

```js
const parser = require('@kdcio/api-gw-req');

module.exports = (event) => {
  const request = parser(event);
  console.log(request);
};
```

Sample `request` object:

```json
{
  "path": "/users/me",
  "method": "GET",
  "query": {},
  "headers": {
    "host": "localhost:8101",
    "connection": "keep-alive",
    "origin": "http://localhost:8100",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
    "content-type": "application/json",
    "accept": "*/*",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "referrer": "http://localhost:8100/",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,th;q=0.8"
  },
  "ip": "127.0.0.1",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
  "params": { "proxy": "me" },
  "body": {},
  "authorizer": {}
}
```

## Parsed Object

| Field Name | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| path       | string | Path of the query                               |
| query      | object | Query string object                             |
| headers    | object | HTTP headers                                    |
| ip         | string | IP Address of the client                        |
| userAgent  | string | User Agent of the http client                   |
| pathParams | object | Path parameters if defined in API Gateway       |
| body       | object | Body parsed as json or as urlencoded form data. |
| authorizer | object | Authorizer object                               |

## See also

[@kdcio/api-gw-resp](https://github.com/kdcio/api-gw-resp)
