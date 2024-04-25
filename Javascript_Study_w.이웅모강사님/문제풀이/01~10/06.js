/* n의 배수
정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return
- 2 ≤ `num` ≤ 100
- 2 ≤ `n` ≤ 9
*/

const solution1 = (num, n) => {
  // % 사용하기 1 - if
  if (num % n === 0) return 1;
  else return 0;
};

const solution2 = (num, n) => {
  // % 사용하기 2 - 삼항
  return num % n === 0 ? 1 : 0;
};

const solution3 = (num, n) => {
  // % 사용하기 3 - 단축형
  return +(num % n === 0);
};

console.log("===solution1===");
console.log(solution1(98, 2)); // 1
console.log(solution1(34, 3)); // 0

console.log("===solution2===");
console.log(solution2(98, 2)); // 1
console.log(solution2(34, 3)); // 0

console.log("===solution3===");
console.log(solution3(98, 2)); // 1
console.log(solution3(34, 3)); // 0
