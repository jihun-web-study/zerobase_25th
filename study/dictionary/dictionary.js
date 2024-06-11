class Dictionary {
  constructor(items = []) {
    this.items = items;
  }

  getBuffer() {
    return { ...this.items };
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }

  set(key, value) {
    this.items[key] = value;
  }
  get(key) {
    return this.items[key] ?? undefined;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }
}

let dict = new Dictionary({ age: 10, name: "Tom" });
console.log(dict.getBuffer());
console.log(dict.size());
console.log(dict.clear());
console.log(dict);
