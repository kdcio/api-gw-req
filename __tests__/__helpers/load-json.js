import fs from 'fs';
import { resolve } from 'path';

const loadJson = (file) => {
  const path = resolve(__dirname, '../fixtures/');
  const jsonString = fs.readFileSync(`${path}/${file}`, 'utf8');
  return JSON.parse(jsonString);
};

export default loadJson;
