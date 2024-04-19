/* 문자열을 배열로 변환하기
문자열 str이 매개변수로 주어질 때, str의 각 문자를 요소로 갖는 배열을 return
*/

const solution = (str) => {
  return str.split('');
};

console.log(solution('Hello world'));
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(solution('')); // []

/* == 라이브 도중 추가 == */
const solution2 = (str) => {
  return [...str];
};

console.log(solution2('Hello world'));
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(solution2('')); // []

const solution3 = (str) => {
  return Array.from(str);
};

console.log(solution3('Hello world'));
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(solution3('')); // []
