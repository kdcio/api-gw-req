const decode = require('./lib/decode');
const makeParser = require('./lib/parse');

const main = (event) => {
  const parser = makeParser({ decode });
  return parser(event);
};

module.exports = main;
