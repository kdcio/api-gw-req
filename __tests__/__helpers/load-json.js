const fs = require('fs');
const { resolve } = require('path');

const loadJson = (file) => {
  const path = resolve(__dirname, '../fixtures/');
  const jsonString = fs.readFileSync(`${path}/${file}`, 'utf8');
  return JSON.parse(jsonString);
};

module.exports = loadJson;
