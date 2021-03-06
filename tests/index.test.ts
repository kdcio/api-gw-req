import 'regenerator-runtime/runtime';
import parser from '../src/index';
import loadJson from './__helpers/load-json';

describe('Parse Request', () => {
  //
  [
    {
      description: 'Event empty object',
      event: {},
      expected: loadJson('expected/empty.json'),
    },
    {
      description: 'GET event',
      event: loadJson('events/get.json'),
      expected: loadJson('expected/get.json'),
    },
    {
      description: 'POST event',
      event: loadJson('events/post.json'),
      expected: loadJson('expected/post.json'),
    },
    {
      description: 'POST form event',
      event: loadJson('events/form.json'),
      expected: loadJson('expected/form.json'),
    },
  ].forEach(({ description, event, expected }) => {
    test(description, async () => {
      const request = parser(event);
      if (expected) {
        expect(request).toEqual(expected);
      }
    });
  });
});
