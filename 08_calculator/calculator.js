const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(a) {
  // let ans = 0;
  // for (let i=0; i < a.length; i+=1){
  //   ans += a[i];
  // }
  // return ans;
  return a.reduce((total, currentItem) => total+currentItem, 0);
};

const multiply = function(a) {
  return a.reduce((total, currentItem) => total*currentItem, 1)
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(num) {
  if (num===0) return 1;
  let total = 1;
  for (let i = num; i>0; i--){
    total *= i;
  }
  return total;
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
