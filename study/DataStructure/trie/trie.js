class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 현재 정렬된 Heap의 최대/최소 요소값
  insert(word) {
    let current = this.root;

    for (const ch of word) {
      let node = current.children[ch];

      if (node === undefined) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (const ch of word) {
      let node = current.children[ch];

      if (node === undefined) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  }

  delete(word, current = this.root, index = 0) {
    if (index === word.length) {
      if (!current.endOfWord) return false;

      current.endOfWord = false;
      return Object.keys(current.children).length === 0;
    }

    let ch = word[index];
    let node = current.children[ch];
    if (node === undefined) return false;

    let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
    if (isDeleteNode) {
      delete current.children[ch];
      return Object.keys(current.children).length === 0;
    }
    return false;
  }
}

const inputs = ["be", "bee", "can", "cat", "cd"];

let trie = new Trie();
console.log(`\n==== Trie Insert ====`);
inputs.forEach((v) => trie.insert(v));
console.log(trie.root);

console.log(`\n==== Trie Search ====`);
console.log(trie.search("bear"));
console.log(trie.search("be"));
console.log(trie.search("bee"));

console.log(`\n==== Trie Delete ====`);
console.log(trie.search("bee"));
trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("b");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));
