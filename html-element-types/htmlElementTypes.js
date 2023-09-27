function htmlElementTypes() {
  // Or use document.querySelectorAll to include <html> <meta> <body> 
  const allElements = [...document.body.querySelectorAll('*')];
  const allTypes = allElements.map((e) => e.tagName);
  return new Set(allTypes).size;
}

module.exports = htmlElementTypes;
