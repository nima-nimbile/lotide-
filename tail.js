
const tail = function(array) {
  let newArray = [...array];
  return newArray.slice(1);
};



module.exports = tail;