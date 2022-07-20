const fib = require("./index");

test("Fib function is defined", () => {
  expect(typeof fib).toEqual("function");
});

test("Calculates correct fib value for 1", () => {
  expect(fib(1)).toEqual(1);
});

test("Calculates correct fib value for 2", () => {
  expect(fib(2)).toEqual(1);
});

test("Calculates correct fib value for 3", () => {
  expect(fib(3)).toEqual(2);
});

test("Calculates correct fib value for 4", () => {
  expect(fib(4)).toEqual(3);
});

test("Calculates correct fib value for 15", () => {
  expect(fib(39)).toEqual(63245986);
});
