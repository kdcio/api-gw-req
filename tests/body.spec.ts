import parser from '../src/parsers/body';

describe('Parse body', () => {
  [
    {
      description: 'should parse JSON',
      contentType: 'application/json',
      body: JSON.stringify({ name: 'ian', age: 10 }),
      expected: { name: 'ian', age: 10 },
    },
    {
      description: 'should return empty object for invalid JSON',
      contentType: 'application/json',
      body: "{name:'ian'}",
      expected: {},
    },
    {
      description: 'should parse url encoded data',
      contentType: 'application/x-www-form-urlencoded',
      body: 'name=ian&age=10',
      expected: { name: 'ian', age: '10' },
    },
    {
      description: 'should return empty object for null data',
      contentType: 'application/x-www-form-urlencoded',
      body: null,
      expected: {},
    },
    {
      description: 'should return text for other type',
      contentType: 'text/plain',
      body: 'name=ian&age=10',
      expected: 'name=ian&age=10',
    },
    {
      description: 'should return unprocessed body if type is not given',
      contentType: undefined,
      body: 'name=ian&age=10',
      expected: 'name=ian&age=10',
    },
  ].forEach(({ description, contentType, body, expected }) => {
    it(description, () => {
      const parsed = parser({ contentType, body });
      expect(parsed).toEqual(expected);
    });
  });
});
