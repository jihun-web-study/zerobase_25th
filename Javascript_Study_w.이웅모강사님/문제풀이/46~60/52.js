/* 문자 리스트를 문자열로 변환하기
문자들이 담겨있는 배열 arr가 주어집니다.
arr의 원소들을 순서대로 이어 붙인 문자열을 return
*/

const solution1 = (arr) => {
  return arr.reduce((concat, str) => (concat += str), "");
};

const solution = (arr) => {
  return arr.join("");
};

console.log(solution(["a", "b", "c"])); // 'abc'

/* == 라이브 도중 추가 == */
