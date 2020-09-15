import { ParserInput, ParserOutput } from './interfaces';
import bodyParser from './parsers/body';
import headerParser from './parsers/header';
import identityParser from './parsers/identity';
import authParser from './parsers/auth';
import stringParser from './parsers/string';
import objParser from './parsers/object';
import methodParser from './parsers/method';

const parser = (event: ParserInput): ParserOutput => {
  const request: ParserOutput = {
    path: stringParser(event.path),
    method: methodParser(event.httpMethod),
    query: objParser(event.queryStringParameters),
    params: objParser(event.pathParameters),
    headers: headerParser(event.headers),
    authorizer: authParser(event.requestContext),
    ip: '',
    userAgent: '',
  };

  ({ ip: request.ip, userAgent: request.userAgent } = identityParser(
    event.requestContext
  ));

  const body = bodyParser({
    contentType: request.headers['content-type'],
    body: event.body,
  });
  if (body) request.body = body;

  return request;
};

export default parser;
