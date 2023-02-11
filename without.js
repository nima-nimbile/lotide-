
const without = function(array, itemsToRemove) {
  let newArr = [];
  array.forEach(item => {
    if(!itemsToRemove.includes(item)){
      newArr.push(item);
    }});
    
  return newArr;

};
console.log(without(["1", "2", "3"], [1, 2, "3"]));
