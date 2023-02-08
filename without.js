
const without = function(array, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    for (let l = 0; l < itemsToRemove.length; l++) {

      if (array[i] === itemsToRemove[l]) {
        break;
      }
      if (itemsToRemove.length - 1 === l) {
        newArray.push(array[i]);

      }
    }
  }
  return newArray;
};
console.log(without(["1", "2", "3"], [1, 2, "3"]));