import Stack from "./stack.js";

function answer(str) {
  const stack = new Stack();

  let result = 0;
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    const mark = str[i];

    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() !== "(") return 0;
        if (str[i - 1] === "(") result += temp;
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() !== "[") return 0;
        if (str[i - 1] === "[") result += temp;
        stack.pop();
        temp /= 3;
        break;
    }
  }

  if (!stack.isEmpty()) return 0;

  return result;
}

const input = ["(()[[]])", "[][]((])", "(()[[]])([])"];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}\n`);
  console.log(answer(input[i]));
}
