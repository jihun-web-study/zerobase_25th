class Stack {
  constructor(array) {
    this.array = array || [];
  }

  getBuffer() {
    return [...this.array];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  push(data) {
    return this.array.push(data);
  }

  pop(data) {
    return this.array.pop(data);
  }

  peek() {
    return this.array.at(-1);
  }

  size() {
    return this.array.length;
  }

  indexOf(data, position = 0) {
    for (let index = position; index < array.length; index++) {
      if (data === this.array[index]) return index;
    }
    return -1;
  }

  includes(data, position = 0) {
    for (let index = position; index < array.length; index++) {
      if (data === this.array[index]) return true;
    }
    return false;
  }
}

const stack1 = new Stack([1, 2, 3]);
const stack2 = new Stack();

console.log(stack1.getBuffer());
console.log(stack2.getBuffer());

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
