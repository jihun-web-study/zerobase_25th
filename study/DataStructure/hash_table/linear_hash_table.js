const HASH_SIZE = 5;

class Element {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class LinearHashTable {
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

  getBuffer() {
    let array = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) array.push(this.table[i]);
    }

    return array;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(`${i} -> ${this.table[i].key}: ${this.table[i].value}`);
    }
  }

  put(key, value) {
    let index = this.hashCode(key);
    let startIndex = index;
    console.log(`key: ${key} -> index: ${index}`);

    do {
      if (this.table[index] === undefined) {
        this.table[index] = new Element(key, value);
        this.length++;
        return true;
      }
      index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);

    return false;
  }

  get(key) {
    let index = this.hashCode(key);
    let startIndex = index;

    do {
      if (this.table[index] !== undefined && this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);

    return undefined;
  }

  remove(key) {
    let index = this.hashCode(key);
    let startIndex = index;

    do {
      if (this.table[index] !== undefined && this.table[index].key === key) {
        let element = this.table[index];
        delete this.table[index];
        this.length--;

        return element;
      }
      index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);

    return undefined;
  }
}

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 152);
lht.put("Mindy", 162);
console.log(lht.put("Paul", 168));
lht.print();
console.log(lht.put("Sue", 148));
lht.print();
console.log("");
console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));
