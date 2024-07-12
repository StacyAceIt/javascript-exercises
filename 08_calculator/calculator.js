const add = function(...args) {
	return args.reduce((total, cur) => {
    return total + cur;
  },0);
};

const subtract = function(...args) {
  return args.reduce((total, cur) => {
    return total - cur;
  });
};

const sum = function(args) {
  return args.reduce((total, cur) => {
    return total + cur;
  },0);
};

const multiply = function(args) {
  return args.reduce((total, cur) => {
    return total * cur;
  },1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	let res = 1;
  for (let i = 1; i < num + 1; i++){
    res *= i;
  }
  return res;
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
