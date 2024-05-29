import process from "process";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  printNode() {
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(`${node.data} -> `);
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
      this.head = node;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this.length++;
    return true;
  }

  remove(value) {
    let current = this.head;
    let prev = current;

    while (current.data !== value && current.next !== null) {
      prev = current;
      current = current.next;
    }

    if (current.data !== value) {
      return null;
    }

    if (current === this.head) {
      this.head = current.next;
    } else {
      prev.next = current.next;
    }
    this.length--;

    return current.data;
  }

  removeAt(position = 0) {
    if (position < 0 || position >= this.length) return null;

    let [current, index, prev] = [this.head, 0, null];

    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this.length--;

    return current.data;
  }

  indexOf(value) {
    let [current, index] = [this.head, 0];

    while (current !== null) {
      if (current.data === value) return index;

      index++;
      current = current.next;
    }

    return -1;
  }
}

//
export default LinkedList;
