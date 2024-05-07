/* 진료 순서 정하기
환자의 응급도를 기준으로 진료 순서
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return
*/

// 해시 테이블 풀이법은 아님
// O(nlogn + n^2) = O(n^2)
const solution = (emergency) => {
  // O(nlogn)
  const sorted = emergency.toSorted((a, b) => b - a);

  // O(n^2)
  const result = emergency.map((v) => sorted.indexOf(v) + 1);

  return result;
};

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]

/* == 라이브 도중 추가 == */

console.log("========");

// 해시 테이블로 풀기
// O(nlogn + n + n) = O(nlogn) < O(n^2)
const solution2 = (emergency) => {
  // O(nlogn)
  const sorted = [...emergency].sort((a, b) => b - a);

  // [3, 76, 24] => [76, 24, 3]

  const map = new Map();
  // O(n)
  sorted.forEach((num, i) => map.set(num, i + 1));
  // O(n)
  const result = emergency.map((num) => map.get(num));

  return result;
};

console.log(solution2([3, 76, 24])); // [3, 1, 2]
console.log(solution2([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution2([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]
