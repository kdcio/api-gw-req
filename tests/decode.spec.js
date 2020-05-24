import decode from '../src/decode';

describe('Decode string', () => {
  it('should decode string', () => {
    const body = 'name=ian&age=10';
    const result = decode(body);
    expect(result).toEqual({
      name: 'ian',
      age: '10',
    });
  });

  it('should return empty object', () => {
    const body = null;
    const result = decode(body);
    expect(result).toEqual({});
  });
});
