import { RequestContext, RequestContextOutput } from '../interfaces';

const requestContextParser = (ctx: RequestContext): RequestContextOutput => {
  if (ctx && ctx.identity) {
    const {
      identity: { sourceIp = '', userAgent = '' },
      authorizer = {},
      stage = '',
    } = ctx;
    return { ip: sourceIp, userAgent, authorizer, stage };
  }
  return { ip: '', userAgent: '', authorizer: {}, stage: '' };
};

export default requestContextParser;
