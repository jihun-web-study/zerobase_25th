/* 부분 문자열인지 확인하기
문자열 str과 target이 매개변수로 주어질 때, target이 문자열 str의 부분 문자열이라면 1을, 아니라면 0을 return
*/

const solution = (str, target) => {
  return +str.includes(target);
};

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "wxyz")); // 0

/* == 라이브 도중 추가 == */

// 옛날부터 존재하던 indexOf()를 쓰는 것도 하나의 방법
