// // Union Types
// function combine(input1: number | string, input2: number | string) {
//   let result;

//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// const combinedAges = combine(20, 35);
// console.log(combinedAges);

// const combinedNames = combine("Mert", "can");
// console.log(combinedNames);

// ********************************************************************

// Literal Types
const actions = {
  "+": (num1: number, num2: number) => num1 + num2,
  "-": (num1: number, num2: number) => num1 - num2,
  "*": (num1: number, num2: number) => num1 * num2,
  "/": (num1: number, num2: number) => num1 / num2,
};

type Action = "+" | "-" | "*" | "/";
function calculate(
  action: Action, // literal types
  num1: number,
  num2: number
) {
  if (!actions.hasOwnProperty(action)) {
    return "Action not defined";
  }

  console.log(actions[action]);

  return actions[action](num1, num2);
}

console.log(calculate("+", 10, 20));
