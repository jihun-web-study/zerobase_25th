/* 문자열 바꿔서 찾기
str의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 part이 있으면 1을 아니면 0을 return
*/

const solution = (str, part) => {
  return +[...str]
    .map((str) => (str === 'A' ? 'B' : 'A'))
    .join('')
    .includes(part);
};

console.log(solution('ABBAA', 'AABB')); // 1
console.log(solution('ABAB', 'ABAB')); // 0

/* == 라이브 도중 추가 == */
