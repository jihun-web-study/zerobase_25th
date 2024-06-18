/* 미로찾기 문제 설명
길: 0, 벽: 1
시작: 왼쪽 맨 아래, 끝: 우측 맨 위
*/

const inputs = [
  ["00110", "00010", "00110", "00000", "01011"],
  ["00110", "00010", "00110", "00010", "01011"],
  [
    "1111111100",
    "1111111101",
    "1111111101",
    "1000111101",
    "1010111101",
    "1010011101",
    "1011011101",
    "1011011101",
    "1011000001",
    "0011111111",
  ],
]; // 9, -1, 29

class Node {
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
  }
}

class Queue {
  constructor() {
    this.array = [];
  }

  enqueue(data) {
    this.array.push(data);
  }

  dequeue() {
    return this.array.shift();
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

function answer(input) {
  let result = -1;
  // 1. 문자열 -> map(0, 1)로 변환
  let size = input.length;
  let map = [];
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = Number(input[i][j]);
    }
  }
  console.table(map);
  // 2. 시작, 끝 설정
  let start = [0, size - 1];
  let end = [size - 1, 0];
  // 3. 시작 -> Queue
  let queue = new Queue();
  queue.enqueue(new Node(start[0], start[1], 1));
  /* 4. while (Queue 값이 존재)
      let v = dequueue (x 좌표, y좌표)
      if 조건문 체크사항
        1) 유효한 좌표값인지
        2) 이미 방문 or 벽인지
        3) 종료 좌표인지 (Queue 순회 === 끝)
  */
  while (!queue.isEmpty()) {
    let v = queue.dequeue();
    // 좌표 유효성 검사
    if (v.x < 0 || v.y < 0 || v.x >= size || v.y >= size) continue;
    // 벽 검사
    if (map[v.y][v.x]) continue;
    // 끝에 도달았을 경우
    if (v.x === end[0] && v.y === end[1]) {
      result = v.count;
      break;
    }
    // 검사가 끝나면 기존 좌표는 벽처리
    map[v.y][v.x] = 1;
    const dir = [
      [1, 0], // right
      [0, -1], // up
      [-1, 0], // left
      [0, 1], // down
    ];
    dir.forEach(([dirX, dirY]) => queue.enqueue(new Node(v.x + dirX, v.y + dirY, v.count + 1)));
  }

  return result;
}

inputs.forEach((v) => console.log(`answer: ${answer(v)}`));
