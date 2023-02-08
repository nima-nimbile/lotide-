const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arra1, arra2) {
  if (JSON.stringify(arra1) === JSON.stringify(arra2)) {
    return true;
  } else {
    return false;
  }
};
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
