/* 두 수의 연산값 비교하기
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환
 12 ⊕ 3 = 123
 3 ⊕ 12 = 312
a ⊕ b와 2 * a * b 중 더 큰 값을 return
a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 
*/

const solution = (a, b) => {
  // 연산 함수 정의
  const concat = (num1, num2) => Number(`${num1}${num2}`);
  const multiple2_A_B = (num1, num2) => 2 * num1 * num2;

  return concat(a, b) >= multiple2_A_B(a, b)
    ? concat(a, b)
    : multiple2_A_B(a, b);
};

console.log("===solution===");
console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
