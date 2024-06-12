// Double-Ended Queue: 삽입/삭제가 양쪽 끝에서 가능한 Queue
class Deque {
  constructor(array = []) {
    this.array = array;
  }

  getBuffer() {
    return [...this.array];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  pushFront(data) {
    return this.array.unshift(data);
  }

  popFront() {
    return this.array.shift();
  }

  pushBack(data) {
    return this.array.push(data);
  }

  popBack() {
    return this.array.pop();
  }

  front() {
    return this.isEmpty() ? undefined : this.array[0];
  }

  back() {
    return this.isEmpty() ? undefined : this.array.at(-1);
  }

  size() {
    return this.array.length;
  }

  clear() {
    this.array = [];
  }
}

let pq = new PriorityQueue();
pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
console.log(pq);
console.log(pq.getBuffer());
