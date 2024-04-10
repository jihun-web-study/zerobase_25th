/* 배열 만들기 1
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return
*/

const solution = (n, k) => {
  return Array.from({ length: Math.trunc(n / k) }, (_, i) => (i + 1) * k);
};

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]

/* == 라이브 도중 추가 == */
