export interface BodyInput {
  contentType?: string;
  body: string;
}

export interface RequestContext {
  identity: {
    sourceIp: string;
    userAgent: string;
  };
  authorizer: object;
  stage: string;
}

export interface RequestContextOutput {
  ip: string;
  userAgent: string;
  authorizer: object;
  stage: string;
}

export interface ParserInput {
  path: string;
  httpMethod: string;
  queryStringParameters: object;
  requestContext: RequestContext;
  pathParameters: object;
  headers: object;
  body: string;
  authorizer: object;
}

export interface ParserOutput {
  path: string;
  method: string;
  query: object;
  ip: string;
  userAgent: string;
  params: object;
  headers: object;
  authorizer: object;
  stage: string;
  body?: object | string;
}
