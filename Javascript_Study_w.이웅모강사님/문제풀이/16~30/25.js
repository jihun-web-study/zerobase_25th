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
