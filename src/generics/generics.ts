import type { Villain, Hero } from "./interfaces";

const printObject = (obj: any) => {
  console.log(obj);
};

// printObject({ name: "John", age: 30 });
// printObject("Hello, world!");
// printObject(123);
// printObject(true);
// printObject(Symbol("foo"));
// printObject(BigInt(123));

function genericFunction<T>(arg: T): T {
  return arg;
}

const genericFunctionArrow = <T>(arg: T): T => arg;

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction("Hola mundo").toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow("Hola mundo").toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 100,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
