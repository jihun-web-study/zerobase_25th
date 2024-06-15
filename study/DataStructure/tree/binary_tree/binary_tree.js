import Queue from "../../queues/queue/queue.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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

  // 전위 순회
  #preOrderTraverseNode(node, callback) {
    if (node === null) return;

    callback(node);
    this.#preOrderTraverseNode(node.left, callback);
    this.#preOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.root, callback);
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
  }

  // 후위 순회
  #postOrderTraverseNode(node, callback) {
    if (node === null) return;

    this.#postOrderTraverseNode(node.left, callback);
    this.#postOrderTraverseNode(node.right, callback);
    callback(node);
  }

  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.root, callback);
  }

  // 층별 순회
  levelOrderTraverse(callback) {
    let q = new Queue();
    let node;
    q.enqueue(this.root);
    while (!q.isEmpty()) {
      node = q.dequeue();
      callback(node);
      if (node.left !== null) q.enqueue(node.left);
      if (node.right !== null) q.enqueue(node.right);
    }
  }
}

let tree = new BinaryTree();

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

console.log(`==== Pre-order ====`);
tree.preOrderTraverse(printNode);
console.log(`end\n`);

console.log(`==== In-order ====`);
tree.inOrderTraverse(printNode);
console.log(`end\n`);

console.log(`==== Post-order ====`);
tree.postOrderTraverse(printNode);
console.log(`end`);

console.log(`==== Level-order ====`);
tree.levelOrderTraverse(printNode);
console.log(`end`);
