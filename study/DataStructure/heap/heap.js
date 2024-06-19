class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  // 신규 노드 추가
  insert(item) {
    this.items[this.size()] = item;
    this.bubbleUp();
  }

  // root Node 추출 및 삭제
  extract() {
    let item = this.items[0];
    this.items[0] = this.items.at(-1);
    this.items.pop();
    this.bubbleDown();
    return item || null; // 없으면 null 반환
  }

  // 내가 만든거
  remove(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.bubbleDown();
  }

  // 현재 정렬된 Heap의 최대/최소 요소값
  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  // Heap min 정렬
  bubbleUp() {
    let index = this.size() - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  // root Node 대체 & 정렬
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) &&
      (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])
    ) {
      let childIndex = this.leftChildIndex(index);
      if (this.rightChild(index) && this.rightChild(index) < this.items[childIndex]) {
        childIndex = this.rightChildIndex(index);
      }
      this.swap(childIndex, index);
      index = childIndex;
    }
  }
}

class MaxHeap extends Heap {
  // Heap max 정렬
  bubbleUp() {
    let index = this.size() - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  // root Node 대체 & 정렬
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) &&
      (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])
    ) {
      let childIndex = this.leftChildIndex(index);
      if (this.rightChild(index) && this.rightChild(index) > this.items[childIndex]) {
        childIndex = this.rightChildIndex(index);
      }
      this.swap(childIndex, index);
      index = childIndex;
    }
  }
}

const inputs = [90, 15, 10, 7, 12, 8, 3];

let minHeap = new MinHeap();
let maxHeap = new MaxHeap();

inputs.forEach((v) => {
  minHeap.insert(v);
  maxHeap.insert(v);
});

console.log(`\n==== Min Heap ====`);
console.log(minHeap);

for (let i = 0; i < inputs.length + 1; i++) {
  console.log(minHeap.extract());
}

console.log(`\n==== Max Heap ====`);
console.log(maxHeap);
for (let i = 0; i < inputs.length + 1; i++) {
  console.log(maxHeap.extract());
}
