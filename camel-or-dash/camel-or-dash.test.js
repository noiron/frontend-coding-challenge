const { camelToDash, dashToCamel } = require('./camel-or-dash');

describe('camelToDash and dashToCamel functions', () => {
  it('should convert camelCaseString to dash-separated string', () => {
    const camelCaseString = 'thisIsVariableName';
    const expectedResult = 'this-is-variable-name';

    const result = camelToDash(camelCaseString);

    expect(result).toBe(expectedResult);
  });

  it('should convert dashSeparatedString to camelCase string', () => {
    const dashSeparatedString = 'this-is-variable-name';
    const expectedResult = 'thisIsVariableName';

    const result = dashToCamel(dashSeparatedString);

    expect(result).toBe(expectedResult);
  });
});
