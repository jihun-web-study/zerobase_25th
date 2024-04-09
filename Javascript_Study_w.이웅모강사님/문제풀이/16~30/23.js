/* 1부터 n까지의 합
양수 n이 주어지면 1부터 n까지 자연수의 합을 반환
*/

const sum = (n) => {
  let result = 0;

  for (let index = 1; index <= n; index++) {
    result += index;
  }

  return result;
};

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1

/* == 라이브 도중 추가 == */

// 강사님거
const sum_재귀 = (n) => (n === 0 ? 0 : sum_재귀(n - 1) + n);
// 재귀함수는 탈출 조건을 걸어주어야 무한 loop에 빠지지 않는다.
// 조건 없는 경우: RangeError: Maximum call stack size exceeded
// call stack: 싱행 컨텍스트
console.log(sum_재귀(10)); // 55
// 백트래킹(트리 구조에서 순회한다던가)에서 재귀 함수가 사용된다.

// 내가 생각난거
// 수학 공식 이용하기
const sum_공식 = (n) => (n * (n + 1)) / 2;
console.log(sum_공식(10)); // 55
