/* 짝수의 합
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return
*/

const solution = (n) => {
  let result = 0;

  for (let index = 1; index <= n; index++) {
    if (index % 2 !== 0) continue;

    result += index;
  }

  return result;
};

console.log(solution(10)); // 30
console.log(solution(4)); // 6
console.log(solution(3)); // 2
console.log(solution(1)); // 0

/* == 라이브 도중 추가 == */
const sum_공식 = (n) => (n / 2) * (n / 2 + 1);

console.log(sum_공식(10)); // 30
