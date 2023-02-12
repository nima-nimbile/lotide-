
const without = function (array, itemsToRemove) {
  let newArr = [];
  array.forEach(item => {
    if(!itemsToRemove.includes(item)){
      newArr.push(item);
    }});
  // for (let i = 0; i < array.length; i++) {
  //   let allow = true;
  //   for (let j = 0; j < itemsToRemove.length; j++) {
  //     if (array[i] === itemsToRemove[j]) {
  //       allow = false;
  //     }
  //   }
  //   if (allow === true) {
  //     newArr.push(array[i])
  //   } 


  // }
  return newArr;

};
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3"], [1, "2", 3, 4]));
