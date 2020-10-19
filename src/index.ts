import { ParserInput, ParserOutput } from './interfaces';
import bodyParser from './parsers/bodyParser';
import headerParser from './parsers/headerParser';
import identityParser from './parsers/identityParser';
import authParser from './parsers/authParser';
import stringParser from './parsers/stringParser';
import objParser from './parsers/objParser';
import methodParser from './parsers/methodParser';

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
