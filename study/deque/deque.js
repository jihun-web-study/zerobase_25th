class Element {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

// Double-Ended Queue: 삽입/삭제가 양쪽 끝에서 가능한 Queue
class Deque {
  constructor(/* data, priority */) {
    /* this.data = data;
    this.priority = priority; */
    this.array = [];
  }

  getBuffer() {
    return this.array.map((element) => element.data);
  }

  isEmpty() {
    return this.array.length === 0;
  }

  pushFront() {
    return this.array.length === 0;
  }

  popFront() {
    return this.array.length === 0;
  }

  pushBack() {
    return this.array.length === 0;
  }

  popBack() {
    return this.array.length === 0;
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
