const makeParser = ({ decode }) => {
  const parseBody = (body) => {
    if (!body) return {};
    try {
      return JSON.parse(body);
    } catch (e) {
      return decode(body);
    }
  };

  const parser = (event) => {
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

    request.body = parseBody(event.body);

    request.authorizer = {};
    if (event.requestContext && event.requestContext.authorizer) {
      request.authorizer = event.requestContext.authorizer;
    }

    return request;
  };

  return parser;
};

export default makeParser;
