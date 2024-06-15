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

  // 노드 최소값 탐색
  #minNode(node) {
    let currentNode = node;

    if (currentNode === null) return null;
    while (currentNode && currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  min() {
    return this.#minNode(this.root);
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
    return this.#maxNode(this.root);
  }

  // 노드 특정값 탐색
  #searchNode(node, value) {
    if (node === null) return false;

    if (node.value === value) return true;
    else if (node.value > value) return this.#searchNode(node.left, value);
    else if (node.value < value) return this.#searchNode(node.right, value);
  }

  search(value) {
    return this.#searchNode(this.root, value);
  }

  // 반복문으로 트리를 순회하여 최소값을 보유한 노드 탐색
  #findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // 노드 삭제
  #removeNode(node, value) {
    if (node === null) return null;
    if (node.value === value) {
      // case 1: leaf node
      if (node.left === null && node.right === null) node = null;
      // case 2: 1 child node
      else if (node.left === null) node = node.right;
      else if (node.right === null) node = node.left;
      // case 3: 2 child node
      else {
        let aux = this.#findMinNode(node.right);
        node.value = aux.value;
        node.right = this.#removeNode(node.right, aux.value);
      }
    } else if (node.value > value) node.left = this.#removeNode(node.left, value);
    else if (node.value < value) node.right = this.#removeNode(node.right, value);

    return node;
  }

  remove(value) {
    return this.#removeNode(this.root, value);
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

console.log(`\n==== Search ====`);
console.log("Has A?: ", tree.search("A"));
console.log("Has I?: ", tree.search("I"));
console.log("Has J?: ", tree.search("J"));

console.log(`\n==== Remove ====`);

tree.inOrderTraverse(printNode);
tree.remove("H");
tree.inOrderTraverse(printNode);
tree.remove("D");
tree.inOrderTraverse(printNode);
tree.remove("F");
tree.inOrderTraverse(printNode);

console.log(tree.root);
