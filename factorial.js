/**
 * Code for factorial using closure
 */
const fact = (n) => {
  return n > 1 ? n * fact(n - 1) : 1;
};

console.log(fact(4));
