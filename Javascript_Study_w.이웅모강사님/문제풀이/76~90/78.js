/* sum matrix
2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환
*/

const sumMatrix = (matrix) => {
  return matrix.reduce((acc, curr) => acc + curr.reduce((a, c) => a + c, 0), 0);
};

console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.log(sumMatrix([])); // 0

const sumMatrix2 = (matrix) => {
  return matrix.flat().reduce((acc, curr) => acc + curr, 0);
};

console.log(
  sumMatrix2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.log(sumMatrix2([])); // 0

/* == 라이브 도중 추가 == */
