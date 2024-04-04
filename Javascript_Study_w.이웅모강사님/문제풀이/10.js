/* 피자 나눠 먹기(3)
피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수
n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 
*/

/* 동등하게 먹는 것이 아니라 최소 1조각이니깐 '올림'을 사용 */
const solution1 = (slice, n) => {
  // 올림을 직접 구현
  const divide = n / slice;

  if (divide % 1 == 0) return divide;
  else return parseInt(divide) + 1;
};

const solution2 = (slice, n) => {
  // Math.ceil() 함수 사용
  return Math.ceil(n / slice);
};

console.log("===solution1===");
console.log(solution1(7, 10)); // 2
console.log(solution1(4, 12)); // 3
console.log(solution1(2, 1)); // 1
console.log("===solution2===");
console.log(solution2(7, 10)); // 2
console.log(solution2(4, 12)); // 3
console.log(solution2(2, 1)); // 1
