const generate = require('./generate');
// const generate = require('./generate.blank');

describe('generate function', () => {
  it('should replace variables in the template with corresponding values', () => {
    const template = 'Hello, {{name}}! Your age is {{age}}.';
    const data = { name: 'Alice', age: 30 };

    const result = generate(template, data);

    expect(result).toBe('Hello, Alice! Your age is 30.');
  });

  it('should handle missing variables by leaving them in the template', () => {
    const template = 'Hello, {{name}}! Your age is {{age}}.';
    const data = { name: 'Bob' };

    const result = generate(template, data);

    expect(result).toBe('Hello, Bob! Your age is {{age}}.');
  });

  it('should handle extra variables in the template by leaving them in the result', () => {
    const template = 'Hello, {{name}}! Your age is {{age}}.';
    const data = { name: 'Charlie', gender: 'Male' };

    const result = generate(template, data);

    expect(result).toBe('Hello, Charlie! Your age is {{age}}.');
  });

  it('should replace multiple instances of the same variable', () => {
    const template = '{{name}} is {{name}} years old.';
    const data = { name: 'David' };

    const result = generate(template, data);

    expect(result).toBe('David is David years old.');
  });

  it('should handle empty template and data', () => {
    const template = '';
    const data = {};

    const result = generate(template, data);

    expect(result).toBe('');
  });
});
