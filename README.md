# API Gateway Request Parser

![ver](https://img.shields.io/npm/v/@kdcsoftware/api-gw-req?style=for-the-badge)
![build](https://img.shields.io/github/workflow/status/kdcsoftware/api-gw-req/build?style=for-the-badge)
![codecov](https://img.shields.io/codecov/c/github/kdcsoftware/api-gw-req?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@kdcsoftware/api-gw-req?style=for-the-badge)
![license](https://img.shields.io/github/license/kdcsoftware/api-gw-req?style=for-the-badge)

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
