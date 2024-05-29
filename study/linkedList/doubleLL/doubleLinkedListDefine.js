import process from "process";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  append(value) {
    let node = new Node(value);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = node;
    }

    node.next = this.head;

    this.length++;
  }

  printNode() {
    process.stdout.write(`head -> `);

    if (this.length !== 0) {
      process.stdout.write(`${this.head.data} -> `);
      for (let node = this.head.next; node !== this.head; node = node.next) {
        process.stdout.write(`${node.data} -> `);
      }
    }

    console.log(`null`);
  }

  insert(value, position = 0) {
    if (position < 0 || position > this.length) {
      throw new Error("삽입할 수 없는 위치입니다!");
    }

    let [node, current, index, prev] = [new Node(value), this.head, 0, ""];

    if (position == 0) {
      node.next = current;

      if (this.isEmpty()) {
        current = node;
      } else {
        while (current.next !== this.head) {
          current = current.next;
        }
      }
      this.head = node;
      current.next = this.head;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;

      if (node.next === null) {
        node.next = this.head;
      }
    }
    this.length++;
    return true;
  }

  remove(value) {
    let current = this.head;
    let prev = current;
    let data = null;

    while (current.data !== value && current.next !== this.head) {
      prev = current;
      current = current.next;
    }

    if (current.data !== value) {
      return null;
    }

    data = current.data;

    if (current === this.head) {
      while (current.next !== this.head) {
        current = current.next;
      }
      this.head = this.head.next;
      current.next = this.head;
    } else {
      prev.next = current.next;
    }
    this.length--;

    return current.data;
  }

  removeAt(position = 0) {
    if (position < 0 || position >= this.length) return null;

    let [current, index, prev] = [this.head, 0, null];
    let data = null;

    if (position === 0) {
      data = current.data;
      while (current.next !== this.head) {
        current = current.next;
      }
      this.head = this.head.next;
      current.next = this.head;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      data = current.data;
      prev.next = current.next;
    }

    this.length--;

    return data;
  }

  indexOf(value) {
    let [current, index] = [this.head, 0];

    do {
      if (current.data === value) return index;

      index++;
      current = current.next;
    } while (current !== this.head);

    return -1;
  }
}

export default CircularLinkedList;
