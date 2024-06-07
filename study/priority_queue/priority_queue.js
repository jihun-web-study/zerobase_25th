class Element {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
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

  enqueue(data, priority) {
    let element = new Element(data, priority);
    let added = false;

    for (let i = 0; i < this.array.length; i++) {
      if (element.priority < this.array[i].priority) {
        this.array.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.array.push(element);
    }

    return this.array.length;
  }

  dequeue() {
    return this.array.shift();
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

let pq = new PriorityQueue();
pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
console.log(pq);
console.log(pq.getBuffer());
