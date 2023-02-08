const assertEqual = function(actual, expected) {
  
  if (actual.toString() === expected.toString()) {
    console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${actual} === ${expected}`);
  }

  else {
    console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [...array];
  return newArray.slice(1);
};
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
