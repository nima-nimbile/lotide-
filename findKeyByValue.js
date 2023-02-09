const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  for (const item in obj) {
    if (obj[item] === value) {
      return item;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);