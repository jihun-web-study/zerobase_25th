/* 공배수
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return
*/

const solution1 = (num, n, m) => {
  // if문
  if (num % n === 0 && num % m === 0) return 1;
  else return 0;
};

const solution2 = (num, n, m) => {
  // 삼항 연산자
  return num % n === 0 && num % m === 0 ? 1 : 0;
};

const solution3 = (num, n, m) => {
  // 단축형
  return +(num % n === 0 && num % m === 0);
};

console.log("===solution1===");
console.log(solution1(60, 2, 3)); // 1
console.log(solution1(55, 10, 5)); // 0
console.log("===solution2===");
console.log(solution2(60, 2, 3)); // 1
console.log(solution2(55, 10, 5)); // 0
console.log("===solution3===");
console.log(solution3(60, 2, 3)); // 1
console.log(solution3(55, 10, 5)); // 0
