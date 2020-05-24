const json = (body) => {
  try {
    return JSON.parse(body);
  } catch (error) {
    return {};
  }
};

const urlEncoded = (body) => {
  const params = {};

  if (!body) return params;

  const parameterKeyValue = body.split('&');
  parameterKeyValue.forEach((value) => {
    const keyValue = value.split('=');
    params[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
  });

  return params;
};

const parser = ({ contentType = '', body }) => {
  if (contentType.toLowerCase() === 'application/json') {
    return json(body);
  }

  if (contentType.toLowerCase() === 'application/x-www-form-urlencoded') {
    return urlEncoded(body);
  }

  return body;
};

export default parser;
