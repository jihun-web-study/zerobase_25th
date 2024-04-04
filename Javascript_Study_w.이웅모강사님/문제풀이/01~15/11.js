/* 더 크게 합치기
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환
 12 ⊕ 3 = 123
 3 ⊕ 12 = 312
a ⊕ b와 b ⊕ a 중 더 큰 값을 return 
a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 
*/

const solution = (a, b) => {
  // 연산 함수 정의
  const concat = (num1, num2) => Number(`${num1}${num2}`);

  return concat(a, b) >= concat(b, a) ? concat(a, b) : concat(b, a);
};

console.log("===solution===");
console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
