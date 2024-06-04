function answer(train) {
  const stack = [];
  let num = 0;
  console.log(`====`);
  for (const element of train) {
    console.log(1, element, stack);
    while (stack.length === 0 || stack.at(-1) < element) {
      stack.push(++num);
    }

    console.log(2, element, stack);

    if (stack.at(-1) == element) {
      stack.pop();
    } else {
      return false;
    }
  }

  console.log(`====`);
  return true;
}

console.log(answer([1, 2, 3]));
console.log(answer([3, 2, 1]));
console.log(answer([3, 1, 2]));
