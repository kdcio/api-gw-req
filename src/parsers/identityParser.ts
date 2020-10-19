import { RequestContext, IdentityOutput } from '../interfaces';

const identityParser = (ctx: RequestContext): IdentityOutput => {
  if (ctx && ctx.identity) {
    const {
      identity: { sourceIp = '', userAgent = '' },
    } = ctx;
    return { ip: sourceIp, userAgent };
  }
  return { ip: '', userAgent: '' };
};

export default identityParser;
