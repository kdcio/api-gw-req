import { ParserInput, ParserOutput } from './interfaces';
import bodyParser from './parsers/bodyParser';
import headerParser from './parsers/headerParser';
import requestContextParser from './parsers/requestContextParser';
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
    authorizer: {},
    ip: '',
    userAgent: '',
    stage: '',
  };

  ({
    ip: request.ip,
    userAgent: request.userAgent,
    authorizer: request.authorizer,
    stage: request.stage,
  } = requestContextParser(event.requestContext));

  const body = bodyParser({
    contentType: request.headers['content-type'],
    body: event.body,
  });
  if (body) request.body = body;

  return request;
};

export default parser;
