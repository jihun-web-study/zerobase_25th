/* 몫 구하기
 num1을 num2로 나눈 몫을 return 
- 0 < `num1` ≤ 100
- 0 < `num2` ≤ 100
*/

function solution1(num1, num2) {
  // '/' 연산자와 parseint() 사용하기
  // parseint() 를 사용해 소숫점 제거
  return parseInt(num1 / num2);
}

function solution2(num1, num2) {
  // Math.floor() 사용하기
  return Math.floor(num1 / num2);
}

function solution3(num1, num2) {
  // '-' 연산자 loop 이용하기
  let result = 0;

  while (num1 >= num2) {
    if (num1 < num2) break;
    num1 -= num2;
    result += 1;
  }

  return result;
}

console.log("===solution1===");
console.log(solution1(10, 5)); // 2
console.log(solution1(7, 2)); // 3

console.log("===solution2===");
console.log(solution2(10, 5)); // 2
console.log(solution2(7, 2)); // 3

console.log("===solution3===");
console.log(solution3(10, 5)); // 2
console.log(solution3(7, 2)); // 3
