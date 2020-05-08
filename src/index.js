const decode = require('./decode');
const makeParser = require('./parse');

const main = (event) => {
  const parser = makeParser({ decode });
  return parser(event);
};

module.exports = main;
