const DEFAULT_SIZE = 5;

class CircularQueue {
  constructor(size) {
    this.array = new Array(size);
    this.size = this.array.length;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    this.length++;
    this.array[this.tail++ % this.size] = data;
  }

  dequeue() {
    this.length--;
    return this.array[this.head++ % this.size];
  }
}

function answer([n, m, k]) {
  const result = [];

  const rq = new CircularQueue(n);

  for (let i = 1; i <= n; i++) {
    rq.enqueue(i);
  }

  // 첫번째 노드 찾기
  rq.tail = rq.head = (n + m - 1) % n;

  // 제거
  let count;
  result.push(rq.dequeue());
  while (rq.length !== 0) {
    count = k - 1;
    while (count--) {
      rq.enqueue(rq.dequeue());
    }

    result.push(rq.dequeue());
  }

  return result;
}

const inputs = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

inputs.forEach((v, i) => console.log(`#${i + 1}: ${answer(v)}`));
