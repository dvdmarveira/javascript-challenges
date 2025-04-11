const createCounter = function (init) {
  let atual = init;
  return {
    increment: () => (atual += 1),
    decrement: () => (atual -= 1),
    reset: () => (atual = init),
  };
};

const counter = createCounter(10);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
