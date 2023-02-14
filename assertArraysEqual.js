const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${array1} === ${array2}`);
  } else {
    return  console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${array1} !== ${array2}`);
  }
};




module.exports = assertArraysEqual
