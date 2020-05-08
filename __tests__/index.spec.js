const parser = require('../index');
const loadJson = require('./__helpers/load-json');

describe('Parse Request', () => {
  [
    {
      description: 'Event empty object',
      event: {},
      expected: loadJson('expected/empty.json'),
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
