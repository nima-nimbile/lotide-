const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${actual} === ${expected}`);
  }

  else {
    console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  const firstElement = array.shift();
  return firstElement;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");