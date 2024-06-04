import Stack from "./stack.js";

function answer(data) {
  const stack = new Stack();
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const str = data[i];

    if (str === "(") {
      stack.push(i);
      //indexStack.push([i]);
    } else if (str === ")") {
      if (stack.isEmpty()) return [];

      result.push([stack.pop(), i]);
    }
  }

  if (stack.size() === 1) return [];

  return result;
}

const input = ["(a+b)", "(a*(b+c)+d)", "(a*(b+c)+d+(e)", "(a*(b+c)+d)+e)", "(a*(b+c)+d)+(e*(f+g))"];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
