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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if ((typeof(object1[key]) !== typeof({}) && typeof(object2[key]) !== typeof({})) && (object1[key] !== object2[key])) {
      return false;
    } else if ((typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) && eqObjects(object1[key], object2[key]) === false) {
      return false;
    } else if (typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) {
      eqObjects(object1[key], object2[key]);
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const result = eqObjects(obj1, obj2);
 
  let right = String.fromCodePoint(9989, 9989, 9989);
  let wrong = String.fromCodePoint(9940, 9940, 9940);

  let answer1, answer2;
  
  if (result) {
    answer1 = `${right} Assertion Passed: `;
    answer2 = `===`;
  } else {
    answer1 = `${wrong} Assertion Failed: `;
    answer2 = `!==`;
  }
  console.log(answer1, obj1, answer2, obj2);
  
};

const ab = { a: "1", b: "2" , d: "6", c: "4"};
const ba = { b: "2", a: "1" , c: "4", d: "6"};
console.log(assertObjectsEqual(ab, ba)); // => true
module.exports = assertObjectsEqual;