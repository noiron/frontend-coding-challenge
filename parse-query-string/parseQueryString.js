function parseQueryString(url) {
  const queryString = url.split('?')[1];
  if (!queryString) return {};

  const pairs = queryString.split('&');
  const queryStringObj = {};

  pairs.forEach((pair) => {
    let [key, value] = pair.split('=');
    if (value === undefined) {
      value = true;
    } else if (/^\d+$/.test(value)) {
      value = +value;
    } else {
      value = decodeURIComponent(value);
    }
    if (!queryStringObj.hasOwnProperty(key)) {
      queryStringObj[key] = value;
    } else {
      queryStringObj[key] = [].concat(queryStringObj[key], value);
    }
  });

  return queryStringObj;
}

// const url =
//   'http://www.domain.com/?user=admin&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

// console.log(parseQueryString(url));

module.exports = parseQueryString;
