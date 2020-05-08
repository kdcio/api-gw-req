const makeParser = ({ decode }) => {
  const parser = (event = {}) => {
    const request = {};

    request.path = event.path || '';
    request.method = event.httpMethod ? event.httpMethod.toUpperCase() : 'GET';
    request.query = event.queryStringParameters || {};
    request.headers = event.headers || {};

    request.ip = '';
    request.userAgent = '';
    if (event.requestContext && event.requestContext.identity) {
      request.ip = event.requestContext.identity.sourceIp;
      request.userAgent = event.requestContext.identity.userAgent;
    }

    request.pathParams = event.pathParameters || '';

    request.body = {};
    if (event.body) {
      try {
        request.body = JSON.parse(event.body);
      } catch (e) {
        request.body = decode(event.body);
      }
    }

    request.authorizer = {};
    if (event.requestContext && event.requestContext.authorizer) {
      request.authorizer = event.requestContext.authorizer;
    }

    request.pathParameters = {};
    if (event.requestContext && event.pathParameters) {
      request.pathParameters = event.pathParameters;
    }

    return request;
  };

  return parser;
};

module.exports = makeParser;
