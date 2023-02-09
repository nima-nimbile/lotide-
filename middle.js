const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${array1} === ${array2}`);
  } else {
    return  console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${array1} !== ${array2}`);
  }
};
const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 === 0) {
    middle.push(array[Math.floor((array.length - 1) / 2)]);
    middle.push(array[Math.floor((array.length) / 2)]);

  } else {
    middle.push(array[Math.floor((array.length) / 2)]);

  }
  return middle;
};
// console.log(middle([1, 2, 3, 4, 5, 6]))
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);