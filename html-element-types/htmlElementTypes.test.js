/** @jest-environment jsdom */
const htmlElementTypes = require('./htmlElementTypes'); // Import your function implementation

describe('htmlElementTypes', () => {
  it('should return 0 for an empty page', () => {
    // Simulate an empty page's DOM structure
    document.body.innerHTML = '';
    
    // Call your function and assert its return value
    const result = htmlElementTypes();
    expect(result).toBe(0); // In this example, assume there are no elements on the page
  });

  it('should return the number of unique HTML element types', () => {
    // Simulate a page's DOM structure with different types of elements
    document.body.innerHTML = `
      <div></div>
      <div></div>
      <p></p>
      <p></p>
      <span></span>
    `;
    
    // Call your function and assert its return value
    const result = htmlElementTypes();
    expect(result).toBe(3); // In this example, assume there are 3 different element types on the page
  });

  it('should handle nested elements correctly', () => {
    // Simulate a page's DOM structure with nested elements
    document.body.innerHTML = `
      <div>
        <p></p>
        <p></p>
      </div>
    `;
    
    // Call your function and assert its return value
    const result = htmlElementTypes();
    expect(result).toBe(2); // In this example, assume there are 2 different element types on the page
  });
});
