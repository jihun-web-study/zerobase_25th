// O(1)로 데이터를 찾는 자료구조
// normal hash
//const HASH_SIZE = 37;
// djb2 hash
const HASH_SIZE = 1013;

class Element {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
  }

  /* normal loselose hash (겹치는 index가 발생함)
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % HASH_SIZE;
  } */

  // djb2 hash
  // hash 충돌 방지를 위해 HASH_SIZE와 seed 값을 소수로 제공
  hashCode(key) {
    let hash = 5381; // seed
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }

    return hash % HASH_SIZE;
  }

  put(key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);
    if (this.table[index] !== undefined) return false;

    this.table[index] = new Element(key, value);
    this.length++;
    return true;
  }

  get(key) {
    return this.table[this.hashCode(key)];
  }

  remove(key) {
    let element = this.table[this.hashCode(key)];

    if (element !== undefined) {
      delete this.table[this.hashCode(key)];
      this.length--;
    }
    return element;
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
}

let hash = new HashTable();
console.log(hash);
console.log(hash.hashCode("Ana"));
console.log(hash.hashCode("Tom"));

hash.put("Ana", 172);
hash.put("Donnie", 152);
hash.put("Paul", 162);
hash.put("Jamie", 182);
hash.put("Tom", 192);
hash.put("Sue", 148);
hash.remove("Paul");
//console.log(hash.getBuffer());
//console.log(hash.size());
hash.print();
//hash.clear();
//console.log(hash);
