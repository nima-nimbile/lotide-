const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return console.log(String.fromCodePoint(9989, 9989, 9989) + ` Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(String.fromCodePoint(9940, 9940, 9940) + ` Assertion Failed: ${array1} !== ${array2}`);
  }
};
// const eqArrays = function(arra1, arra2) {
//   if (JSON.stringify(arra1) === JSON.stringify(arra2)) {
//     return true;
//   } else {
//     return false;
//   }
// };


const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  let newStr = sentence.split(" ").join("");
  for (const item of newStr) {
    if (results[item]) {
      results[item].push(index);
    } else {
      results[item] = [index];
    }
    index += 1;
  }
  return results;
};

const results = letterPositions("hello");

assertArraysEqual(results["l"], [2, 3]);
module.exports = letterPositions;