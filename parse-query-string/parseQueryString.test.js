const parseQueryString = require('./parseQueryString');

describe('parseQueryString', () => {
  it('should parse a simple query string', () => {
    const url = 'http://www.domain.com/?user=admin&id=123&city=Beijing';
    const result = parseQueryString(url);

    expect(result).toEqual({
      user: 'admin',
      id: 123,
      city: 'Beijing',
    });
  });

  it('should handle repeated keys as an array', () => {
    const url = 'http://www.domain.com/?id=123&id=456';
    const result = parseQueryString(url);

    expect(result).toEqual({
      id: [123, 456],
    });
  });

  it('should convert numeric values to numbers', () => {
    const url = 'http://www.domain.com/?age=25';
    const result = parseQueryString(url);

    expect(result).toEqual({
      age: 25,
    });
  });

  it('should decode URL-encoded values', () => {
    const url = 'http://www.domain.com/?city=%E5%8C%97%E4%BA%AC';
    const result = parseQueryString(url);

    expect(result).toEqual({
      city: '北京',
    });
  });

  it('should treat unspecified values as true', () => {
    const url = 'http://www.domain.com/?enabled';
    const result = parseQueryString(url);

    expect(result).toEqual({
      enabled: true,
    });
  });

  it('should handle a URL with no query string', () => {
    const url = 'http://www.domain.com/';
    const result = parseQueryString(url);

    expect(result).toEqual({});
  });

  it('should handle an empty URL', () => {
    const url = '';
    const result = parseQueryString(url);

    expect(result).toEqual({});
  });

  it('should correctly identify 0 values', () => {
    const url = 'http://www.domain.com/?id=0&id=1';
    const result = parseQueryString(url);
  
    expect(result).toEqual({
      id: [0, 1],
    });
  });
  
});
