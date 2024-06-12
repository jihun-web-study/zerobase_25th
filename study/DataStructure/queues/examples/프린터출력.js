class PrinterQueue {
  constructor() {
    this.array = [];
  }

  enqueue(data) {
    return this.array.push(data);
  }

  dequeue() {
    return this.array.shift();
  }

  front() {
    return this.array[0];
  }

  max() {
    return Math.max(...this.array);
  }
}

function answer(values, select) {
  let result = -1;

  const vq = new PrinterQueue();
  const pq = new PrinterQueue();

  for (let i = 0; i < values.length; i++) {
    vq.enqueue(i);
    pq.enqueue(values[i]);
  }

  let count = 0;

  while (true) {
    if (pq.front() === pq.max()) {
      count++;
      if (vq.front() === select) {
        result = count;
        break;
      } else {
        vq.dequeue();
        pq.dequeue();
      }
    } else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    }
  }

  return result;
}

const inputs = [
  [[3], 0],
  [[3, 4, 5, 6], 2],
  [[1, 1, 5, 1, 1, 1], 0],
];

inputs.forEach((v) => console.log(`${v[0]} ${v[1]}: ${answer(v[0], v[1])}`));
