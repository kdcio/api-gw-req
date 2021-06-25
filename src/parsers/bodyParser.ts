import { BodyInput } from '../interfaces';

const json = (body: string): object => {
  try {
    return JSON.parse(body);
  } catch (error) {
    return {};
  }
};

const urlEncoded = (body: string): object => {
  const params = {};

  if (!body) return params;

  const parameterKeyValue = body.split('&');
  parameterKeyValue.forEach((value) => {
    const keyValue = value.split('=');
    params[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
  });

  return params;
};

const bodyParser = ({ contentType = '', body }: BodyInput): object | string => {
  if (contentType.toLowerCase().indexOf('application/json') >= 0) {
    return json(body);
  }

  if (contentType.toLowerCase() === 'application/x-www-form-urlencoded') {
    return urlEncoded(body);
  }

  return body;
};

export default bodyParser;
