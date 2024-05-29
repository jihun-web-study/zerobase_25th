class Train {
  constructor(number) {
    this.number = number;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  appedArray(array) {
    if (!Array.isArray(array)) throw new Error("입력한 값이 배열이 아닙니다.");
    if (array.length === 0) throw new Error("입력한 배열에 값이 없습니다.");
    const length = array.length;

    const newNode = new Train(array[0]);
    let current = newNode;

    for (let index = 1; index < length; index++) {
      current.next = new Train(array[index]);
      current = current.next;
    }

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length += length;
  }

  printNode() {
    process.stdout.write(`head -> `);
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(`${node.number} -> `);
    }
    console.log(`null`);
  }
}

const ll = new LinkedList();

console.log(ll);
//ll.appedArray();
//ll.appedArray(1);
//ll.appedArray([]);
ll.appedArray([1, 2, 3, 4, 5, 6]);
ll.printNode();
ll.appedArray([7, 8, 9]);
ll.printNode();
