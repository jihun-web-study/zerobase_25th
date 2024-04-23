/* sum matrix
2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환
*/

const sumMatrix = (matrix) => {
  return matrix.reduce((acc, curr) => acc + curr.reduce((a, c) => a + c, 0), 0);
};
console.time();
console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.timeEnd();
console.log(sumMatrix([])); // 0

const sumMatrix2 = (matrix) => {
  return matrix.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
};
console.time();
console.log(
  sumMatrix2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.timeEnd();
console.log(sumMatrix2([])); // 0

const sumMatrix3 = (matrix) => {
  const depthOneArr = matrix.reduce((concat, arr) => concat.concat(arr), []);

  return depthOneArr.reduce((acc, curr) => acc + curr, 0);
};
console.time();
console.log(
  sumMatrix3([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.timeEnd();
console.log(sumMatrix3([])); // 0

/* == 라이브 도중 추가 == */
