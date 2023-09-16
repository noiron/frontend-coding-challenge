const format = require('./format'); // 导入 format 函数

describe('format function', () => {
  it('should format "1234.56" as "1,234.56"', () => {
    const formatted = format('1234.56');
    expect(formatted).toBe('1,234.56');
  });

  it('should format "123456789" as "123,456,789"', () => {
    const formatted = format('123456789');
    expect(formatted).toBe('123,456,789');
  });

  it('should format "1234567.8999" as "1,234,567.8999"', () => {
    const formatted = format('1234567.8999');
    expect(formatted).toBe('1,234,567.8999');
  });

  it('should handle numbers without fractional part', () => {
    const formatted = format('42');
    expect(formatted).toBe('42');
  });

  // it('should handle numbers with only fractional part', () => {
  //   const formatted = format('.123');
  //   expect(formatted).toBe('0.123');
  // });

  it('should handle negative numbers', () => {
    const formatted = format('-1234.56');
    expect(formatted).toBe('-1,234.56');
  });

  // it('should handle numbers with leading zeros', () => {
  //   const formatted = format('00123.45');
  //   expect(formatted).toBe('123.45');
  // });

  it('should handle empty string as input', () => {
    const formatted = format('');
    expect(formatted).toBe('');
  });

  // it('should handle non-numeric characters in input', () => {
  //   const formatted = format('abc123.45def');
  //   expect(formatted).toBe('123.45');
  // });
});
