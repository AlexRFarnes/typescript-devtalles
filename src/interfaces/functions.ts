interface addTwoNumbers {
  (a: number, b: number): number;
}

let addTwoNumbersFunction: addTwoNumbers;
addTwoNumbersFunction = (a: number, b: number) => a + b;
console.log(addTwoNumbersFunction(1, 2));
