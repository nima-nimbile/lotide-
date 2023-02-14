
const eqArrays = function(arra1, arra2) {
  if (JSON.stringify(arra1) === JSON.stringify(arra2)) {
    return true;
  } else {
    return false;
  }
};


module.exports = eqArrays;
