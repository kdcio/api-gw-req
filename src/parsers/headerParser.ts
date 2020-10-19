const headerParser = (h: object): object => {
  const headers = {};
  if (typeof h !== 'object') return headers;
  Object.keys(h).forEach((k) => {
    headers[k.toLowerCase()] = h[k];
  });
  return headers;
};

export default headerParser;
