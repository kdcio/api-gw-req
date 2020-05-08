/**
 * Decode data from application/x-www-form-urlencoded
 */
module.exports = (encodedString) => {
  const params = {};

  const parameterKeyValue = encodedString.split('&');
  parameterKeyValue.forEach((value) => {
    const keyValue = value.split('=');
    params[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
  });

  return params;
};
