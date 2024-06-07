// Ring Queue, Ring Buffer와 동일
const DEFAULT_SIZE = 5;

class CircularQueue {
  constructor(array = [], size = 5) {
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
  }

  getBuffer() {
    return [...this.array];
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length == this.size;
  }

  enqueue(data) {
    if (this.isFull()) throw new Error("Buffer가 가득 찼습니다."); // return false

    this.array[this.tail % this.size] = data;
    this.tail = (this.tail + 1) % this.size; // 단순 증가하면 언젠가는 값이 넘침
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Buffer가 비어있습니다."); // return undefined

    const dequeuedData = this.array[this.head % this.size];
    delete this.array[this.head % this.size];
    this.head = (this.head + 1) % this.size;
    this.length--;

    return dequeuedData;
  }

  front() {
    return this.length === 0 ? undefined : this.array[this.head];
  }

  size() {
    return this.length;
  }

  clear(size = DEFAULT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }
}

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
console.log(cq.getBuffer());
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log("====");
cq.enqueue(5);
cq.enqueue(6);
console.log(cq);
console.log(cq.getBuffer());
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log("====");
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);
console.log(cq.getBuffer());
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log("====");
cq.enqueue(7);
console.log(cq);
console.log(cq.getBuffer());
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log("====");
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);
console.log(cq.getBuffer());
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log("====");
