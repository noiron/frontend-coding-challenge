function generate(template, data) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, variable) => {
    return data[variable] || match;
  });
}

const template = `{{ name }} eats {{ food }}.`;
const data = {
  name: 'Anna',
  food: 'cake',
};
generate(template, data);
// Anna eats cake.

module.exports = generate;
