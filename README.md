# API Gateway Request Parser

This module will parse the event object (that came from API Gateway) in lambda and create a new object with all unnecessary fields stripped out.

[![ver](https://img.shields.io/npm/v/@kdcio/api-gw-req)](https://www.npmjs.com/package/@kdcio/api-gw-req) [![size](https://badgen.net/bundlephobia/minzip/@kdcio/api-gw-req)](https://bundlephobia.com/result?p=@kdcio/api-gw-req) [![build](https://img.shields.io/github/workflow/status/kdcio/api-gw-req/build)](https://github.com/kdcio/api-gw-req/actions?query=workflow%3Abuild) [![Known Vulnerabilities](https://snyk.io/test/github/kdcio/api-gw-req/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kdcio/api-gw-req?targetFile=package.json) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kdcio_api-gw-req&metric=alert_status)](https://sonarcloud.io/dashboard?id=kdcio_api-gw-req) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kdcio_api-gw-req&metric=code_smells)](https://sonarcloud.io/dashboard?id=kdcio_api-gw-req) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kdcio_api-gw-req&metric=coverage)](https://sonarcloud.io/dashboard?id=kdcio_api-gw-req) [![license](https://img.shields.io/github/license/kdcio/api-gw-req)](https://github.com/kdcio/api-gw-req/blob/master/LICENSE)

## Install

```bash
npm i @kdcio/api-gw-req
```

## Usage

```js
import parser from '@kdcio/api-gw-req';

export const hello = async (event) => {
  const request = parser(event);
  console.log(request);
};
```

Sample `event` object:

```json
{
  "body": null,
  "headers": {
    "Host": "localhost:8101",
    "Connection": "keep-alive",
    "Origin": "http://localhost:8100",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
    "content-type": "application/json",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Referrer": "http://localhost:8100/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,th;q=0.8"
  },
  "httpMethod": "GET",
  "multiValueHeaders": {
    "Host": ["localhost:8101"],
    "Connection": ["keep-alive"],
    "Origin": ["http://localhost:8100"],
    "User-Agent": [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
    ],
    "content-type": ["application/json"],
    "Accept": ["*/*"],
    "Sec-Fetch-Site": ["same-site"],
    "Sec-Fetch-Mode": ["cors"],
    "Referrer": ["http://localhost:8100/"],
    "Accept-Encoding": ["gzip, deflate, br"],
    "Accept-Language": ["en-US,en;q=0.9,th;q=0.8"]
  },
  "multiValueQueryStringParameters": null,
  "path": "/users/me",
  "pathParameters": { "proxy": "me" },
  "queryStringParameters": null,
  "requestContext": {
    "accountId": "offlineContext_accountId",
    "apiId": "offlineContext_apiId",
    "httpMethod": "GET",
    "identity": {
      "accountId": "offlineContext_accountId",
      "apiKey": "offlineContext_apiKey",
      "caller": "offlineContext_caller",
      "cognitoAuthenticationProvider": "offlineContext_cognitoAuthenticationProvider",
      "cognitoAuthenticationType": "offlineContext_cognitoAuthenticationType",
      "cognitoIdentityId": "offlineContext_cognitoIdentityId",
      "cognitoIdentityPoolId": "offlineContext_cognitoIdentityPoolId",
      "sourceIp": "127.0.0.1",
      "user": "offlineContext_user",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
      "userArn": "offlineContext_userArn"
    },
    "protocol": "HTTP/1.1",
    "requestId": "offlineContext_requestId_ck38asmqx000d26necwg8eki4",
    "requestTimeEpoch": 1574315489802,
    "resourceId": "offlineContext_resourceId",
    "resourcePath": "/users/{proxy*}",
    "stage": "local"
  },
  "resource": "/users/{proxy*}",
  "stageVariables": null,
  "isOffline": true
}
```

Parsed object of the above event:

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
  "authorizer": {},
  "stage": "local"
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
| params     | object | Path parameters if defined in API Gateway       |
| body       | object | Body parsed as json or as urlencoded form data. |
| authorizer | object | Authorizer object                               |
| stage      | string | Deployment stage                                |

## See also

[@kdcio/api-gw-resp](https://github.com/kdcio/api-gw-resp)
