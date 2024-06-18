import BinaryTree from "./binary_tree/binary_tree.js";

class BinaryTree2 extends BinaryTree {
  clear() {
    this.root = null;
  }
}

let tree = new BinaryTree2();

let inputs = ["ABC", "FBADCEGIH", "CBAEDFG"];

console.log(`\n==== 후위순회 문제 ====`);
inputs.forEach((v) => {
  const answer = [];
  function getNodes(node) {
    answer.push(node.value);
  }

  for (const c of v) {
    tree.insert(c);
  }
  console.log(tree);
  tree.postOrderTraverse(getNodes);
  console.log(answer);
  tree.clear();
});

console.log(`\n==== Tree 체크 ====`);
for (const c of "CBAEDFG") {
  tree.insert(c);
}

console.log(tree);
console.log(tree.root);
console.log(tree.root.right);
