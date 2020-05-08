import decode from './decode';
import makeParser from './parse';

const main = (event) => {
  const parser = makeParser({ decode });
  return parser(event);
};

module.exports = main;
