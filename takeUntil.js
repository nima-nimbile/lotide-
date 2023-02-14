const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${array1} === ${array2}`);
  } else {
    return  console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${array1} !== ${array2}`);
  }
};
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    console.log(callback(item));
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]));
module.exports = takeUntil;

