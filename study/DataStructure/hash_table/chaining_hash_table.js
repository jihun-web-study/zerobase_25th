// 링크드리스트 + 해시테이블
import LinkedList from "../linkedList/simpleLL/linkedListDefine.js";

const HASH_SIZE = 5;

class Element {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class ChainingHashTable {
  constructor() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
  }

  hashCode(key) {
    let hash = 0; // seed
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % HASH_SIZE;
  }

  clear() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
  }

  size() {
    return this.length;
  }

  put(key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if (this.table[index] === undefined) this.table[index] = new LinkedList();

    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
  }

  getBuffer() {
    let array = [];

    for (const element of this.table) {
      if (element) {
        let current = element.head;
        do {
          array.push(current.data);
          current = current.next;
        } while (current);
      }
    }

    return array;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        let current = this.table[i].head;
        process.stdout.write(`#${i}`);
        do {
          process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
          current = current.next;
        } while (current);
        console.log("");
      }
    }
  }

  get(key) {
    let index = this.hashCode(key);

    if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
      let current = this.table[index].head;
      do {
        if (current.data.key === key) return current.data.value;

        current = current.next;
      } while (current);
    }

    return undefined;
  }

  remove(key) {
    let index = this.hashCode(key);
    let element = undefined;

    if (this.table[index] !== undefined) {
      let current = this.table[index].head;
      do {
        if (current.data.key === key) {
          element = current.data;
          this.table[index].remove(current.data);
          if (this.table[index].isEmpty()) {
            delete this.table[index];
          }
        }
        current = current.next;
      } while (condition);
    }
    this.length--;
    return element;
  }
}

let cht = new ChainingHashTable();
console.log(cht);
console.log(cht.hashCode("Ama"));

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
console.log(ll);

cht.put("Ana", 172);
cht.put("Donnie", 182);
cht.put("Sue", 162);
cht.put("Jamie", 152);
cht.put("Paul", 177);
console.log(cht);
console.log("");
cht.print();
console.log("");
console.log(cht.getBuffer());
console.log("");
console.log(cht.get("Ana"));
console.log(cht.get("Donnie"));
console.log(cht.get("Kim"));
