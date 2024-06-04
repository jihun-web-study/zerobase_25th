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
