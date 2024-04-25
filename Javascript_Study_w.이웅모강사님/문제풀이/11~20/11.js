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

/* == 라이브 도중 추가 == */
/* 
  1. 문자열 -> 숫자 변환 : `+str`
  2. 대소비교 : Math.max(num1, num2)
*/
const solution2 = (a, b) => {
  const sum1 = +`${a}${b}`;
  const sum2 = +`${b}${a}`;

  return Math.max(sum1, sum2);
};

console.log("===solution2===");
console.log(solution2(9, 91)); // 991
console.log(solution2(89, 8)); // 898

console.log(Math.max(1, "a"));
