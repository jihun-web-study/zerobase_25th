/* 나머지 구하기
 num1를 num2로 나눈 나머지를 return
- 0 < `num1` ≤ 100
- 0 < `num2` ≤ 100
*/

function solution1(num1, num2) {
  // '%' 연산자 사용하기
  return num1 % num2;
}

function solution2(num1, num2) {
  // '-' 연산자 loop 이용하기
  let result = num1;

  while (result >= num2) {
    if (result < num2) break;

    result -= num2;
  }

  return result;
}

console.log("===solution1===");
console.log(solution1(3, 2)); // 1
console.log(solution1(10, 5)); // 0

console.log("\n===solution2===");
console.log(solution2(3, 2)); // 1
console.log(solution2(10, 5)); // 0
