import { RequestContext } from '../interfaces';

const authParser = (ctx: RequestContext): object => {
  if (ctx && ctx.authorizer) {
    return ctx.authorizer;
  }
  return {};
};

export default authParser;
