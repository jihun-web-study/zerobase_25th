import Stack from "./stack.js";

function answer(str) {
  const result = [];
  const stack = new Stack();
  const dish = [...str].sort().join("");
  let dish_index = 0;

  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dish_index]);
      dish_index++;
      result.push(0);
    }
    if (stack.isEmpty() || stack.peek() > str[i]) return [];
    else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

const input = ["bacd", "dabc", "edcfbijha"];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
