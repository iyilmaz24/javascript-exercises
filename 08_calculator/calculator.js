const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arrArg){
  result = arrArg.reduce( (sum, curr) => sum += curr, 0)  
  return result
};

const multiply = function(arrArg) {
  result = arrArg.reduce( (sum, curr) => sum *= curr, 1)
  return result
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  if(a === 0 || a === 1){
    return 1
  }
  return a * factorial(a - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
