import bodyParser from './body';

const stringParser = (s) => s || '';
const objParser = (o) => o || {};
const methodParser = (met) => (met ? met.toUpperCase() : 'GET');
const headerParser = (h) => {
  const headers = {};
  if (typeof h !== 'object') return headers;
  Object.keys(h).forEach((k) => {
    headers[k.toLowerCase()] = h[k];
  });
  return headers;
};
const identityParser = (ctx) => {
  if (ctx && ctx.identity) {
    const {
      identity: { sourceIp = '', userAgent = '' },
    } = ctx;
    return { ip: sourceIp, userAgent };
  }
  return { ip: '', userAgent: '' };
};
const authParser = (ctx) => {
  if (ctx && ctx.authorizer) {
    return ctx.authorizer;
  }
  return {};
};

const parser = (event) => {
  const request = {};
  request.path = stringParser(event.path);
  request.method = methodParser(event.httpMethod);
  request.query = objParser(event.queryStringParameters);
  ({ ip: request.ip, userAgent: request.userAgent } = identityParser(
    event.requestContext
  ));
  request.params = stringParser(event.pathParameters);
  request.headers = headerParser(event.headers);
  const body = bodyParser({
    contentType: request.headers['content-type'],
    body: event.body,
  });
  if (body) request.body = body;
  request.authorizer = authParser(event.requestContext);
  return request;
};

export default parser;
