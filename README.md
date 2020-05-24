# API Gateway Request Parser

[![ver](https://img.shields.io/npm/v/@kdcsoftware/api-gw-req?style=for-the-badge)](https://www.npmjs.com/package/@kdcsoftware/api-gw-req)
[![build](https://img.shields.io/github/workflow/status/kdcsoftware/api-gw-req/build?style=for-the-badge)](https://github.com/kdcsoftware/api-gw-req/actions?query=workflow%3Abuild)
[![codecov](https://img.shields.io/codecov/c/github/kdcsoftware/api-gw-req?style=for-the-badge)](https://codecov.io/gh/kdcsoftware/api-gw-req)
[![size](https://img.shields.io/bundlephobia/min/@kdcsoftware/api-gw-req?style=for-the-badge)](https://bundlephobia.com/result?p=@kdcsoftware/api-gw-req)
[![license](https://img.shields.io/github/license/kdcsoftware/api-gw-req?style=for-the-badge)](https://github.com/kdcsoftware/api-gw-req/blob/master/LICENSE)

[![Maintainability](https://img.shields.io/codeclimate/maintainability/kdcsoftware/api-gw-req?style=for-the-badge)](https://api.codeclimate.com/v1/badges/1b3fb72854c0f527cd26/maintainability) [![Code Issues](https://img.shields.io/codeclimate/issues/kdcsoftware/api-gw-req?style=for-the-badge)](https://codeclimate.com/github/kdcsoftware/api-gw-req/issues)
[![Technical Debt](https://img.shields.io/codeclimate/tech-debt/kdcsoftware/api-gw-req?style=for-the-badge)](https://codeclimate.com/github/kdcsoftware/api-gw-req/trends/technical_debt)

This module will parse the event object (that came from API Gateway) in lambda and create a new object with all unnecessary fields stripped out.

## Install

```bash
npm i @kdcsoftware/api-gw-req
```

## Usage

```js
const parser = require('@kdcsoftware/api-gw-req');

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
    "Host": "localhost:8101",
    "Connection": "keep-alive",
    "Origin": "http://localhost:8100",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
    "content-type": "application/json",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Referer": "http://localhost:8100/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,th;q=0.8"
  },
  "ip": "127.0.0.1",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
  "pathParams": { "proxy": "me" },
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

[@kdcsoftware/api-gw-resp](https://github.com/kdcsoftware/api-gw-resp)
