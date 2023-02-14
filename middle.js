
const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 === 0) {
    middle.push(array[Math.floor((array.length - 1) / 2)]);
    middle.push(array[Math.floor((array.length) / 2)]);

  } else {
    middle.push(array[Math.floor((array.length) / 2)]);

  }
  return middle;
};
// console.log(middle([1, 2, 3, 4, 5, 6]))


module.exports = middle;