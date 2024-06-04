class Queue {
  constructor(array) {
    this.array = array || [];
    this.head = 0;
    this.tail = array ? array.length : 0;
  }

  getBuffer() {
    return [...this.array];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  enqueue(data) {
    return this.array.push(data);
  }

  dequeue_1() {
    return this.array.shift();
  }

  dequeue_2() {
    if (this.tail === this.head) return undefined;
    const data = this.array[this.head];
    delete this.array[this.head];
    this.head++;
    return data;
  }

  front() {
    return this.isEmpty() ? undefined : this.array[0];
  }

  size() {
    return this.array.length;
  }

  clear() {
    this.array = [];
  }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(1);
console.log(queue);
queue.clear();
console.log(queue);
console.log(queue.front());

for (let i = 0; i < 100000; i++) {
  queue.enqueue(i);
}

console.time("deq 1");
queue.dequeue_1();
console.timeEnd("deq 1");

console.time("deq 2");
queue.dequeue_2();
console.timeEnd("deq 2");
