// const createCounter = function (n) {
//   let current = n - 1;
//   return function () {
//     return (current += 1);
//   };
// };

// const counter = createCounter(10);

// console.log(counter());
// console.log(counter());
// console.log(counter());

var createCounter = function (n) {
  let current = n;
  return function () {
    return (current += 1);
  };
};

const contando = createCounter(10);
console.log(contando());

// const contando = createCounter();
// console.log(contando(10));
