const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);