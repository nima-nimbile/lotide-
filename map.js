const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${array1} === ${array2}`);
  } else {
    return  console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(arra1, arra2) {
  if (JSON.stringify(arra1) === JSON.stringify(arra2)) {
    return true;
  } else {
    return false;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
console.log(eqArrays(results1, ["g", "c", "t", "m", "t"]));

