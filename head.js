const assertEqual = require('./assertEqual')

const head = function(array) {
  const firstElement = array.shift();
  return firstElement;
};

module.exports = head;