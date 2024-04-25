/* 꼬리 문자열
strList와 제외하려는 문자열 ex가 주어질 때, strList에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return
*/

const solution = (strList, ex) => {
  return strList.reduce((concat, str) => (str.includes(ex) ? concat : concat + str), "");
};

console.log(solution(["abc", "def", "ghi"], "ef")); // 'abcghi'
console.log(solution(["abc", "bbc", "cbc"], "c")); // ''

/* == 라이브 도중 추가 == */

const solution2 = (strList, ex) => {
  return strList.filter((str) => !str.includes(ex)).join("");
};

console.log(solution2(["abc", "def", "ghi"], "ef")); // 'abcghi'
console.log(solution2(["abc", "bbc", "cbc"], "c")); // ''
