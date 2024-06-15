class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 재귀로 트리를 순회하여 노드 추가
  #insertNode(node, value) {
    if (node === null) node = new Node(value);
    else if (value < node.value) node.left = this.#insertNode(node.left, value);
    else if (value >= node.value) node.right = this.#insertNode(node.right, value);

    return node;
  }

  insert(value) {
    this.root = this.#insertNode(this.root, value);
  }

  // 중위 순회
  #inOrderTraverseNode(node, callback) {
    if (node === null) return;

    this.#inOrderTraverseNode(node.left, callback);
    callback(node);
    this.#inOrderTraverseNode(node.right, callback);
  }

  inOrderTraverse(callback) {
    this.#inOrderTraverseNode(this.root, callback);
    console.log(`end\n`);
  }

  // 노드 최대값 탐색
  #maxNode(node) {
    if (node === null) return null;
    while (node && node.right !== null) {
      node = node.right;
    }

    return node.value;
  }

  max() {
    this.root = this.#maxNode(this.root);
  }

  // 노드 최소값 탐색
  #minNode(node) {
    if (node === null) return null;
    while (node && node.left !== null) {
      node = node.left;
    }

    return node.value;
  }

  min() {
    this.root = this.#minNode(this.root);
  }

  // 노드 특정값 탐색
  #searchNode(node, value) {
    return node;
  }

  search(value) {
    this.root = this.#searchNode(this.root, value);
  }

  // 노드 삭제
  #removeNode(node, value) {
    return node;
  }

  remove(value) {
    this.root = this.#removeNode(this.root, value);
  }
}

let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log(`==== In-order ====`);
tree.inOrderTraverse(printNode);

console.log(`==== Min & Max ====`);
console.log("min: ", tree.min());
console.log("max: ", tree.max());
