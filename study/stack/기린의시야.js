import Stack from "./stack.js";

function answer(array) {
  const stack = new Stack();

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const next = array[j];
      if (current >= next) stack.push(array[j]);
      else break;
    }
  }

  return stack.size();
}

const input = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
